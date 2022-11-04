(() => {
    'use strict';

    const jsonurl = '/assets/search.json' ;

    const params = (new URL(document.location)).searchParams;

    const tags = new Set(params.getAll('tag'));
    const categories = new Set(params.getAll('category'));

    if (tags.size === 0 && categories.size === 0) {
        return;
    }

    const onload = new Promise(res => window.addEventListener('DOMContentLoaded', res));
    let onfetch =
          fetch(jsonurl)
          .then((response) => response.json());

    if (tags.size > 0) {
        onfetch = onfetch.then((json) => json.filter((post) =>
            post["tags"].some((tag) => tags.has(tag))));
    }
    if (categories.size > 0) {
        onfetch = onfetch.then((json) => json.filter((post) =>
            post["categories"].some((cat) => categories.has(cat))));
    }

    Promise.all([onfetch, onload])
        .then((values) => {
            const posts = values[0];

            const template = document.querySelector('#search-result');

            const postList = document.createElement('ol');
            postList.classList = ["post-list"];
            for (const post of posts) {
                const title = post["title"];
                const date = new Date(post["date"]);
                const url = post["url"];
                const tags = post["tags"];
                const categories = post["categories"];

                const clone = template.content.cloneNode(true);
                clone.querySelector('.search-title').textContent = title;
                clone.querySelector('.search-url').href = url;
                clone.querySelector('.search-date').textContent = date;

                // YYYY-MM-DDTHH:mm:ss.sssZ
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
