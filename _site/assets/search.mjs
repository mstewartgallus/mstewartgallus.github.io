function intersect(X, Y) {
    const Z = new Set();
    for (const x of X) {
        if (Y.has(x)) {
            Z.add(x);
        }
    }
    return Z;
};

function parseForm(formData) {
    const tags = new Set();
    const categories = new Set();

    for (const [key, value] of formData.entries()) {
        switch (key) {
        case "tag":
            tags.add(value);
            break;
        case "category":
            categories.add(value);
            break;
        }
    }
    return [tags, categories];
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

async function fetchDB() {
    const response = await fetch("/assets/search.json");
    const text = await response.text();
    return JSON.parse(text, reviver);
}

const getDB = fetchDB();

const DOMContentLoaded = new Promise((resolve, reject) => {
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
const location = new URL(document.location);
const params = location.searchParams;
const base = location.href + ":" + location.port;

const [tagParams, categoryParams] = parseParams(params);

await DOMContentLoaded;

const h1 = document.getElementById("title");
const form = document.getElementById("search");
const category = document.getElementById("category");
const tag = document.getElementById("tag");

const template = document.getElementById(templateId).content;
const output = document.getElementById(outputId);

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

const db = await getDB;

function findRenderFocus(tagParams, categoryParams) {
    const posts = findPosts(db, tagParams, categoryParams);
    render(tagParams, categoryParams, template, output, posts);
    h1.focus();
}

findRenderFocus(tagParams, categoryParams);

window.addEventListener('popstate', (event) => {
    setTimeout(() => {
        const params = new URL(document.location).searchParams;
        const [tagParams, categoryParams] = parseParams(params);
        findRenderFocus(tagParams, categoryParams);
    }, 0);
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const cat = new Set();
    const tags = new Set();
    for (const option of category.selectedOptions) {
        cat.add(option.value);
    }
    for (const option of tag.selectedOptions) {
        tags.add(option.value);
    }

    findRenderFocus(tags, cat);

    const params = new URLSearchParams();
    for (const t of tags) {
        params.append("tag", t);
    }
    for (const c of cat) {
        params.append("category", c);
    }
    history.pushState(null, '', '?' + params);
});
