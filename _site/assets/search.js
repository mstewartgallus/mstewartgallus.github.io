(() => {
    'use strict';

    const jsonurl = '/assets/search.json' ;

    const params = (new URL(document.location)).searchParams;

    const tags = new Set(params.getAll('tag'));
    const categories = new Set(params.getAll('category'));

    if (tags.size === 0 && categories.size === 0) {
        return;
    }

    const location = new URL(window.location);
    const base = location.href + ':' + location.port;

    const parse = (posts) => posts.map((post) => {
        return {
            title: post.title,
            url: new URL(post.url, base),
            tags: new Set(post.tags),
            categories: new Set(post.categories),
            date: new Date(post.date)
        };
    });

    const onload = new Promise(res => window.addEventListener('DOMContentLoaded', res));
    let onfetch =
        fetch(jsonurl)
        .then((response) => response.json())
        .then(parse);

    if (tags.size > 0) {
        onfetch = onfetch
            .then((json) => json.filter((post) =>
                Array
                    .from(post.tags.values())
                    .some((tag) => tags.has(tag))));
    }

    if (categories.size > 0) {
        onfetch = onfetch
            .then((json) => json.filter((post) =>
                Array
                    .from(post.categories.values())
                    .some((cat) => categories.has(cat))));
    }

    Promise.all([onfetch, onload])
        .then((values) => {
            const posts = values[0];

            const template = document.querySelector('#search-result');

            const postList = document.createElement('ol');
            postList.classList = ["post-list"];
            for (const post of posts) {
                const title = post.title;
                const date = post.date;
                const url = post.url;
                const tags = post.tags;
                const categories = post.categories;

                const clone = template.content.cloneNode(true);
                clone.querySelector('.search-title').textContent = title;
                clone.querySelector('.search-url').href = url.href;
                clone.querySelector('.search-date').textContent = date;

                const keywords = clone.querySelector('.search-keywords');
                for (const category of categories) {
                    const listEntry = document.createElement('li');
                    listEntry.textContent = category;
                    keywords.appendChild(listEntry);
                }
                for (const tag of tags) {
                    const listEntry = document.createElement('li');
                    listEntry.textContent = tag;
                    keywords.appendChild(listEntry);
                }
                postList.appendChild(clone);
            }

            document
                .querySelector('#search-output')
                .appendChild(postList) ;
        });
})();
