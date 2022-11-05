const onload = new Promise(res => window.addEventListener('DOMContentLoaded', res));

const querySelector = async query => {
    await onload;
    return document.querySelector(query);
};

const getTemplate = querySelector('#search-result');
const getOutput = querySelector('#search-output');
const getSearch = querySelector('#search');
const getJson = fetch('/assets/search.json');

const location = new URL(document.location);
const base = location.href + ':' + location.port;

const overlaps = (X, Y) => {
    for (const x of X) {
        if (Y.has(x)) {
            return x;
        }
    }
    return false;
};

const getDatabase = (async () => {
    const response = await getJson;
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

const parseForm = (formData) => {
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

const lookup = async (tags, categories) => {
    const posts = await getDatabase;

    return posts
        .filter((post) =>
            (tags.size === 0 || overlaps(tags, post.tags)) &&
                (categories.size === 0 || overlaps(categories, post.categories)))
        .map(post => {
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
            return {
                title: post.title,
                date: post.date,
                url: post.url,
                keywords: keywords
            };
        });
};

const onForm = async formData => {
    const [tags, categories] = parseForm(formData);

    const filtered = await lookup(tags, categories);

    const template = (await getTemplate).content;

    const postList = document.createElement('ol');
    postList.classList = ["post-list"];

    const elems = filtered
          .map((post) => {
              const title = post.title;
              const date = post.date;
              const url = post.url;
              const keywords = post.keywords;

              const clone = template.cloneNode(true);
              clone.querySelector('.search-title').textContent = title;
              clone.querySelector('.search-url').href = url.href;
              clone.querySelector('.search-date').textContent = date;
              clone.querySelector('.search-keywords').replaceChildren(...keywords);
              return clone;
          });

    postList.append(...elems);

    const output = await getOutput;

    output.replaceChildren(postList);
};

const search = await getSearch;
search.addEventListener('submit', async event => {
    event.preventDefault();

    await onForm(new FormData(event.target));
});
