---
---

(function (){
    'use strict';
    const domload = new Promise(res => window.addEventListener('DOMContentLoaded', res));

    const jsonurl = '{{ "./assets/search.json" | relative_url }}' ;

    const params = (new URL(document.location)).searchParams;

    // const tags = new Set(params.getAll('tag'));
    // const categories = new Set(params.getAll('category'));

    // if (tags.size === 0 && categories.size === 0) {
    //     return;
    // }

    const location = new URL(window.location);
    const base = location.href + ':' + location.port;

    const overlaps = (X, Y) => {
        for (const x of X) {
            if (Y.has(x)) {
                return x;
            }
        }
        return false;
    };
    const database = async function() {
        const response = await fetch(jsonurl);
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
    };

    const onForm = (posts, template, output, search, formData) => {
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

        const filtered =
              posts
              .filter((post) =>
                  (tags.size === 0 || overlaps(tags, post.tags)) &&
                      (categories.size === 0 || overlaps(categories, post.categories)))
              .map((post) => {
                  const title = post.title;
                  const date = post.date;
                  const url = post.url;
                  const tags = post.tags;
                  const categories = post.categories;

                  const keywords = [];
                  for (const category of categories) {
                      const listEntry = document.createElement('li');
                      listEntry.textContent = category;
                      keywords.push(listEntry);
                  }
                  for (const tag of tags) {
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
        postList.append(...filtered);
        output.replaceChildren(postList);
    };

    (async function() {
        await domload;

        const posts = await database();

        const template = document.querySelector('#search-result').content;
        const output = document.querySelector('#search-output');

        const search = document.querySelector('#search');

        search.addEventListener('submit', (event) => {
            event.preventDefault();

            onForm(posts, template, output, search, new FormData(event.target));
        });
    })();
})();
