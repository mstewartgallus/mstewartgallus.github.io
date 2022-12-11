import Fuse from './vend/fuse.mjs' ;

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

function findPosts(fuse, query) {
    return fuse.search(query)
}

function render(template, posts) {
    const elems = posts.map(search => {
        const post = search.item;
        const title = post.title;
        const date = post.date;
        const url = post.url;

        const cat = document.createElement("div");
        if (post.categories.length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Category";
            cat.append(listEntry);
        }
        for (const category of post.categories) {
            const params = new URLSearchParams();
            params.append("s", category);

            const anchor = document.createElement("a");
            anchor.textContent = category;
            anchor.href = "/search/?" + params;

            const listEntry = document.createElement("dd");
            listEntry.append(anchor);
            cat.append(listEntry);
        }

        const tagel = document.createElement("div");
        if (post.tags.length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Tag";
            tagel.append(listEntry);
        }
        for (const tag of post.tags) {
            const params = new URLSearchParams();
            params.append("s", tag);

            const anchor = document.createElement("a");
            anchor.textContent = "#" + tag;
            anchor.href = "/search/?" + params;

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

const options = Object.freeze({
    ignoreLocation: true,
    keys: ['title', 'content', 'tags', 'categories', 'date']
});

async function fetchjson(str) {
    return await ((await fetch(str)).json());
}

const db = new Lazy(async () => {
    const index = await fetchjson("/assets/index.json");
    const search = await fetchjson("/assets/search.json");
    return new Fuse(search, options, Fuse.parseIndex(index));
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

const doctitle = document.title;
const template = document.getElementById('search-result').content;
const output = document.getElementById('search-output');
const searchInput = document.getElementById('search-box');

const h1s = document.getElementsByTagName('h1');

let isfirst = true;
const loop = await requests();
let request = (await loop.next()).value;
for (;;) {
    const location = new URL(request.url);
    let response;
    if (location.pathname === '/search/'
        && request.method === 'GET') {
        let query = location.searchParams.get("s");
        if (query == null) {
            query = "";
        }
        const posts = (await db.force()).search(query);
        const postList = render(template, posts);

        document.title = `${query} — ${doctitle}`;
        const h1 = h1s[0];
        if (h1) {
            h1.textContent = `${query} — Search`;
        }

        output.setAttribute('hidden', 'hidden');
        output.replaceChildren(postList);
        output.removeAttribute('hidden');

        searchInput.value = query ;

        response = new Response('', { status: 200, statusText: 'OK' });
    } else {
        response = new Response('', { status: 404, statusText: 'Not Found' });
    }

    if (!isfirst) {
        const h1 = h1s[0];
        if (h1) {
            h1.setAttribute('tabindex', '-1');
            h1.focus();
        }
    }
    isfirst = false;
    request = (await loop.next(response)).value;
}
