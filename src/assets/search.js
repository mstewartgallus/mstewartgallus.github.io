---
---

(function (){
    'use strict';
    const onload = new Promise(res => window.addEventListener('DOMContentLoaded', res));

    const getTemplate = async function() {
        await onload;
        return document.querySelector('#search-result').content;
    }
    const getOutput = async function() {
        await onload;
        return document.querySelector('#search-output');
    }
    const getSearch = async function() {
        await onload;
        return document.querySelector('#search');
    }

    const jsonurl = '{{ "./assets/search.json" | relative_url }}' ;

    const params = (new URL(document.location)).searchParams;

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

    const getDatabase = async () => {
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

    const onForm = async formData => {
        const [tags, categories] = parseForm(formData);

        const posts = await getDatabase();
        const template = await getTemplate();

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

        const output = await getOutput();

        const postList = document.createElement('ol');
        postList.classList = ["post-list"];
        postList.append(...filtered);
        output.replaceChildren(postList);
    };

    (async function() {
        const search = await getSearch();
        search.addEventListener('submit', async event => {
            event.preventDefault();

            await onForm(new FormData(event.target));
        });
    })();
})();
