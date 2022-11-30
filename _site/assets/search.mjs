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

const DOMContentLoaded = new Promise((resolve, reject) => {
    document.addEventListener('DOMContentLoaded', (event) => resolve());
    switch (document.readyState) {
    case 'interactive':
    case 'complete':
        resolve();
        break;
    }
});

const doctitle = document.title;

function render(tagParams, categoryParams, template, output, posts) {
    const tags = Array.from(tagParams.values());
    const cats = Array.from(categoryParams.values());
    document.title = `${tags} ${cats} — ${doctitle}`;
    const elems = posts.map((post) => {
        const title = post.get("title");
        const date = post.get("date");
        const url = post.get("url");

        const keywords = [];
        if (post.get("categories").length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Category";
            keywords.push(listEntry);
        }
        for (const category of post.get("categories")) {
            const params = new URLSearchParams();
            params.append("category", category);

            const anchor = document.createElement("a");
            anchor.textContent = category;
            anchor.href = "/search/?" + params;

            const listEntry = document.createElement("dd");
            listEntry.append(anchor);
            keywords.push(listEntry);
        }
        if (post.get("tags").length !== 0) {
            const listEntry = document.createElement("dt");
            listEntry.textContent = "Tag";
            keywords.push(listEntry);
        }
        for (const tag of post.get("tags")) {
            const params = new URLSearchParams();
            params.append("tag", tag);

            const anchor = document.createElement("a");
            anchor.textContent = "#" + tag;
            anchor.href = "/search/?" + params;

            const listEntry = document.createElement("dd");
            listEntry.append(anchor);
            keywords.push(listEntry);
        }

        const clone = template.cloneNode(true);
        clone.querySelector(".search-title").textContent = title;
        clone.querySelector(".search-url").href = url;
        clone.querySelector(".search-date").textContent = date;
        clone.querySelector(".search-keywords").append(...keywords);
        return clone;
    });

    for (const option of category.options) {
        option.selected = categoryParams.has(option.value);
    }
    for (const option of tag.options) {
        option.selected = tagParams.has(option.value);
    }

    const postList = document.createElement("ul");
    postList.append(...elems);
    output.replaceChildren(postList);
    output.ariaBusy = 'false' ;
}

const meta = new URL(import.meta.url).searchParams;
const outputId = meta.get("output");
const templateId = meta.get("template");

async function* search() {
    const response = await fetch("/assets/search.json");
    const text = await response.text();
    const db = JSON.parse(text, reviver);

    await DOMContentLoaded;

    const h1 = document.getElementById("title");
    const template = document.getElementById(templateId).content;
    const output = document.getElementById(outputId);

    let isfirst = true;
    for (;;) {
        const [tagParams, categoryParams] = yield;

        const posts = findPosts(db, tagParams, categoryParams);
        render(tagParams, categoryParams, template, output, posts);
        if (isfirst) {
            isfirst = false;
        } else {
            h1.focus();
        }
    }
}

async function* route() {
    let accept = true;
    const loop = await search();

    await loop.next();
    for (;;) {
        const request = yield accept;
        const location = new URL(request.url);
        accept = false;
        switch (location.pathname) {
        case '/search/':
            accept = true;
            await loop.next(parseParams(location.searchParams));
            break;
        }
    }
}

async function* main() {
    const loop = await route();

    await loop.next();

    await loop.next(new Request(window.location));
    for (;;) {
        const event = yield;

        switch (event.type) {
        case 'popstate': {
            const accept = await loop.next(new Request(window.location));
            if (accept) {
                event.preventDefault();
            }
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

            const request = new Request(href);
            const accept = await loop.next(request);
            if (accept) {
                history.pushState(null, '', request.url);
                event.preventDefault();
            }
            break;
        }

        case 'submit': {
            const form = event.target;

            const params = new URLSearchParams(new FormData(form));
            const request = new Request(form.action + "?" + params);
            if (new URL(request.url).origin != document.location.origin) {
                continue;
            }
            const accept = await loop.next(request);
            if (accept) {
                history.pushState(null, '', request.url);
                event.preventDefault();
            }
            break;
        }
        }
    }
}

const loop = await main();
await loop.next();

document.addEventListener('click', async (event) => {
    await loop.next(event);
});
document.addEventListener('submit', async (event) => {
    await loop.next(event);
});
window.addEventListener('popstate', async (event) => {
    await loop.next(event);
});
