---
---

const meta = new URL(import.meta.url).searchParams;
const outputId = meta.get('output');
const templateId = meta.get('template');
const searchId = meta.get('search');

function overlaps(X, Y) {
    for (const x of X) {
        if (Y.has(x)) {
            return x;
        }
    }
    return false;
};

function parseForm(formData) {
    const tags = new Set();
    const categories = new Set();

    for (const [key, value] of formData.entries()) {
        switch (key) {
        case 'tag':
            tags.add(value);
            break;
        case 'category':
            categories.add(value);
            break;
        }
    }
    return [tags, categories];
};

const location = new URL(document.location);
const params = location.searchParams;
const base = location.href + ':' + location.port;

const getDB = (async () => {
    const response = await fetch('{{ "./assets/search.json" | relative_url }}');
    const json = await response.json();
    return json
        .map((post) => {
            return {
                title: post.title,
                url: new URL(post.url, base),
                tags: new Set(post.tags),
                categories: new Set(post.categories),
                date: new Date(post.date)
            }
        });

})();

function findPosts(db, tags, categories) {
    return db.filter((post) =>
        (tags.size === 0 || overlaps(tags, post.tags)) &&
            (categories.size === 0 || overlaps(categories, post.categories)));
}

function render(template, output, posts) {
    const elems = posts.map((post) => {
        const title = post.title;
        const date = post.date;
        const url = post.url;

        const keywords = [];
        for (const category of post.categories) {
            const listEntry = document.createElement('li');
            listEntry.textContent = category;
            keywords.push(listEntry);
        }
        for (const tag of post.tags) {
            const listEntry = document.createElement('li');
            listEntry.textContent = tag;
            keywords.push(listEntry);
        }

        const clone = template.cloneNode(true);
        clone.querySelector('.search-title').textContent = title;
        clone.querySelector('.search-url').href = url.href;
        clone.querySelector('.search-date').textContent = date;
        clone.querySelector('.search-keywords').replaceChildren(...keywords);
        return clone;
    });

    const postList = document.createElement('ol');
    postList.classList = ["post-list"];
    postList.append(...elems);
    output.replaceChildren(postList);
};

function parseParams(params) {
    const tags = new Set();
    const cats = new Set();
    for (const [key, value] of params) {
        switch (key) {
        case 'tag':
            tags.add(value);
            break;
        case 'category':
            cats.add(value);
            break;
        }
    }
    return [tags, cats];
}

const [tagParams, categoryParams] = parseParams(params);

const template = document.getElementById(templateId).content;
const output = document.getElementById(outputId);
const search = document.getElementById(searchId);

const db = await getDB;

render(template, output, findPosts(db, tagParams, categoryParams));

function* mainLoop(template, output) {
    while (true) {
        const event = yield;
        const [tags, categories] = parseForm(new FormData(event.target));
        const filtered = findPosts(db, tags, categories);
        render(template, output, filtered);
    }
};

const loop = mainLoop(template, output);
loop.next();

search.addEventListener('submit', event => {
    event.preventDefault();
    loop.next(event);
});
