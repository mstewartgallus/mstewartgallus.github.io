---
---
class Queue {
    #events = [];
    #promise;
    #signal;

    constructor() {
        this.#promise = new Promise(r => {
            this.#signal = r;
        });
    }

    push(e) {
        this.#events.push(e);
        this.#signal();
    }

    async pop() {
        for (;;) {
            const e = this.#events.pop();
            if (e != null) {
                return e;
            }
            await this.#promise;
            this.#promise = new Promise(r => {
                this.#signal = r;
            });
        }
    }
}

class Lazy {
    #fn;
    #value;
    #init = false;

    constructor(f) {
        this.#fn = f;
    }

    async force() {
        if (this.#init) {
            return this.#value;
        }
        const value = await this.#fn();
        this.#value = value;
        this.#fn = null;
        this.#init = true;
        return value;
    }
}


function intersect(X, Y) {
    const Z = new Set();
    for (const x of X) {
        if (Y.has(x)) {
            Z.add(x);
        }
    }
    return Z;
};

function reviver(key, value) {
    if (typeof value === "object"
        && !Array.isArray(value)
        && value !== null) {
        value = new Map(Object.entries(value));
    }
    return Object.freeze(value);
}

function parseParams(params) {
    const tags = new Set();
    const cats = new Set();
    for (const [key, value] of params) {
        switch (key) {
        case "tag":
            tags.add(value);
            break;
        case "category":
            cats.add(value);
            break;
        }
    }
    return [tags, cats];
}

function findPosts(db, tags, categories) {
    const category = db.get("category");
    const tag = db.get("tag");
    const posts = db.get("post");

    // FIXME process sets lazily somehow?
    let cs = new Set(Array.from(categories)
                     .flatMap(c => category.get(c)));
    let ts = new Set(Array.from(tags)
                     .flatMap(t => tag.get(t)));

    if (tags.size === 0) {
        ts = cs;
    }
    if (categories.size === 0) {
        cs = ts;
    }

    return Array.from(intersect(cs, ts)).map(index => posts[index]);
}

function render(template, posts) {
    const elems = posts.map((post) => {
        const title = post.get("title");
        const date = post.get("date");
        const url = post.get("url");

        const cat = document.createElement("div");
        if (post.get("categories").length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Category";
            cat.append(listEntry);
        }
        for (const category of post.get("categories")) {
            const params = new URLSearchParams();
            params.append("category", category);

            const anchor = document.createElement("a");
            anchor.textContent = category;
            anchor.href = "{% link search.html %}?" + params;

            const listEntry = document.createElement("dd");
            listEntry.append(anchor);
            cat.append(listEntry);
        }


        const tagel = document.createElement("div");
        if (post.get("tags").length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Tag";
            tagel.append(listEntry);
        }
        for (const tag of post.get("tags")) {
            const params = new URLSearchParams();
            params.append("tag", tag);

            const anchor = document.createElement("a");
            anchor.textContent = "#" + tag;
            anchor.href = "{% link search.html %}?" + params;

            const listEntry = document.createElement("dd");
            listEntry.append(anchor);
            tagel.append(listEntry);
        }

        const clone = template.cloneNode(true);
        clone.querySelector(".search-title").textContent = title;
        clone.querySelector(".search-url").href = url;
        clone.querySelector(".search-date").textContent = date;
        clone.querySelector(".search-keywords").append(cat, tagel);
        return clone;
    });

    const postList = document.createElement("ul");
    postList.append(...elems);
    return postList;
}

const queue = new Queue();

document.addEventListener('click', e => queue.push(e));
document.addEventListener('submit', e => queue.push(e));
window.addEventListener('popstate', e => queue.push(e));

async function* events() {
    for (;;) {
        yield await queue.pop();
    }
}

async function* requests() {
    yield new Request(window.location);

    for await (const event of events()) {
        switch (event.type) {
        case 'popstate': {
            yield new Request(window.location);
            break;
        }

        case 'click': {
            const tag = event.target;
            if (tag.tagName != 'A') {
                continue;
            }
            const href = tag.href;
            if (!href) {
                continue;
            }
            if (event.button != 0) {
                continue;
            }

            if (tag.origin != document.location.origin) {
                continue;
            }

            const response = yield new Request(href);
            if (response.ok) {
                history.pushState(null, '', request.url);
                event.preventDefault();
            }
            break;
        }

        case 'submit': {
            const form = event.target;

            let url = new URL(form.action, document.location.origin);
            if (url.origin != document.location.origin) {
                continue;
            }

            const formdata = new FormData(form);
            const options = {
                method: form.method
            };
            if (form.method === 'get') {
                const params = new URLSearchParams(formdata);
                for (const [key, value] of url.searchParams) {
                    params.append(key, value);
                }
                url = new URL(url.origin + url.pathname + "?" + params);
            } else {
                options.body = formdata;
            }
            const request = new Request(url, options);
            const response = yield request;
            if (response.ok) {
                history.pushState(null, '', request.url);
                event.preventDefault();
            }
            break;
        }
        }
    }
}
const db = new Lazy(async () => {
    const jsresponse = await fetch("{% link assets/search.json %}");
    const text = await jsresponse.text();
    return JSON.parse(text, reviver);
});

await new Promise((resolve, reject) => {
    document.addEventListener('DOMContentLoaded', (event) => resolve());
    switch (document.readyState) {
    case 'interactive':
    case 'complete':
        resolve();
        break;
    }
});

const meta = new URL(import.meta.url).searchParams;
const outputId = meta.get("output");
const templateId = meta.get("template");

const doctitle = document.title;
const template = document.getElementById(templateId).content;
const output = document.getElementById(outputId);
const category = document.getElementById('category');
const tag = document.getElementById('tag');

const h1s = document.getElementsByTagName('h1');

let isfirst = true;
const loop = await requests();
let request = (await loop.next()).value;
for (;;) {
    const location = new URL(request.url);
    let response;
    if (location.pathname === '/search/'
        && request.method === 'GET') {
        const [tagParams, categoryParams] = parseParams(location.searchParams);

        const posts = findPosts(await db.force(), tagParams, categoryParams);
        const postList = render(template, posts);

        const tags = Array.from(tagParams.values());
        const cats = Array.from(categoryParams.values());

        document.title = `${tags} ${cats} — ${doctitle}`;

        output.replaceChildren(postList);
        output.ariaBusy = 'false' ;

        for (const option of category.options) {
            option.selected = categoryParams.has(option.value);
        }
        for (const option of tag.options) {
            option.selected = tagParams.has(option.value);
        }
        response = new Response('', { status: 200, statusText: 'OK' });
    } else {
        response = new Response('', { status: 404, statusText: 'Not Found' });
    }

    if (!isfirst) {
        const h1 = h1s[0];
        if (h1) {
            h1.setAttribute('tabindex', '-1');
            h1.focus();
            h1.removeAttribute('tabindex');
        }
    }
    isfirst = false;
    request = (await loop.next(response)).value;
}
