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

const mainLoop = function *(posts, template, search) {
    while (true) {
        const event = yield;

        const [tags, categories] = parseForm(new FormData(event.target));

        const filtered = posts.filter((post) =>
            (tags.size === 0 || overlaps(tags, post.tags)) &&
                (categories.size === 0 || overlaps(categories, post.categories)));

        const elems = posts
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
    }
};

await new Promise(res => window.addEventListener('DOMContentLoaded', res));

const template = document.querySelector('#search-result').content;
const output = document.querySelector('#search-output');
const search = document.querySelector('#search');

const response = await fetch('/assets/search.json');
const json = await response.json();
const posts = json
      .map((post) => {
          return {
              title: post.title,
              url: new URL(post.url, base),
              tags: new Set(post.tags),
              categories: new Set(post.categories),
              date: new Date(post.date)
          }
      });

const loop = mainLoop(posts, template, output);
// lose first value ?
loop.next();

search.addEventListener('submit', event => {
    event.preventDefault();
    loop.next(event);
});
