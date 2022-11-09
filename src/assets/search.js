---
---

const overlaps = (X, Y) => {
    for (const x of X) {
        if (Y.has(x)) {
            return x;
        }
    }
    return false;
};

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

const location = new URL(document.location);
const base = location.href + ':' + location.port;

const posts = { value: null };

(async () => {
    const response = await fetch('{{ "./assets/search.json" | relative_url }}');
    const json = await response.json();
    posts.value = json
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

const mainLoop = function *(template, output) {
    // ignore events until we load everything
    let event = null;
    while (posts.value === null) {
        event = yield;
    }
    const db = posts.value;

    while (true) {
        const [tags, categories] = parseForm(new FormData(event.target));

        const filtered = db.filter((post) =>
            (tags.size === 0 || overlaps(tags, post.tags)) &&
                (categories.size === 0 || overlaps(categories, post.categories)));

        const elems = filtered
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
              })
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

        const postList = document.createElement('ol');
        postList.classList = ["post-list"];
        postList.append(...elems);
        output.replaceChildren(postList);

        event = yield;
    }
};

const template = document.getElementById('search-result').content;
const output = document.getElementById('search-output');
const search = document.getElementById('search');

const loop = mainLoop(template, output);
loop.next();

search.addEventListener('submit', event => {
    event.preventDefault();
    loop.next(event);
});
