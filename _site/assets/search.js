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

const getDB = (async () => {
    const response = await fetch('/assets/search.json');
    const json = await response.json();
    return json;
})();

function findPosts(db, tags, categories) {
    const category = db.category;
    const tag = db.tag;
    const posts = db.post;

    // FIXME process sets lazily somehow?
    let cs = new Set(Array.from(categories)
                       .flatMap(c => category[c]));
    let ts = new Set(Array.from(tags)
                       .flatMap(t => tag[t]));

    if (tags.size === 0) {
        ts = cs;
    }
    if (categories.size === 0) {
        cs = ts;
    }

    return Array.from(intersect(cs, ts)).map(id => posts[id]);
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
