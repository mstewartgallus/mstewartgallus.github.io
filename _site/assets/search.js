const meta = new URL(import.meta.url).searchParams;
const outputId = meta.get('output');
const templateId = meta.get('template');
const searchId = meta.get('search');

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

function reviver(key, value) {
    if (typeof value === 'object'
        && !Array.isArray(value)
        && value !== null) {
        value = new Map(Object.entries(value));
    }
    return Object.freeze(value);
}

async function fetchDB() {
    const response = await fetch('/assets/search.json');
    const text = await response.text();
    return JSON.parse(text, reviver);
}

const getDB = fetchDB();

function findPosts(db, tags, categories) {
    const category = db.get('category');
    const tag = db.get('tag');
    const posts = db.get('post');

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

function render(template, output, posts) {
    const elems = posts.map((post) => {
        const title = post.get('title');
        const date = post.get('date');
        const url = post.get('url');

        const keywords = [];
        for (const category of post.get('categories')) {
            const anchor = document.createElement('a');
            anchor.textContent = category;
            anchor.href = '/search?category=' + category;

            const listEntry = document.createElement('li');
            listEntry.append(anchor);
            keywords.push(listEntry);
        }
        for (const tag of post.get('tags')) {
            const anchor = document.createElement('a');
            anchor.textContent = tag;
            anchor.href = '/search?tag=' + tag;

            const listEntry = document.createElement('li');
            listEntry.append(anchor);
            keywords.push(listEntry);
        }

        const clone = template.cloneNode(true);
        clone.querySelector('.search-title').textContent = title;
        clone.querySelector('.search-url').href = url;
        clone.querySelector('.search-date').textContent = date;
        clone.querySelector('.search-keywords').append(...keywords);
        return clone;
    });

    const postList = document.createElement('ul');
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
