---
---

(() => {
    'use strict';

    const params = (new URL(document.location)).searchParams;

    const tags = params.getAll('tag');
    const categories = params.getAll('category');

    if (tags.length === 0 && categories.length === 0) {
        return;
    }

    const queryBuilder = ['[itemProp="blogPost"]'];
    if (categories.length != 0) {
        const catList =
              categories
              .map(cat => `[data-category~="${cat}"]`)
              .join(',');
        queryBuilder.push(`:where(${catList})`);
    }
    if (tags.length != 0) {
        const tagList =
          tags
          .map(tag => `[data-tag~="${tag}"]`)
          .join(',');
        queryBuilder.push(`:where(${tagList})`);
    }

    const query = queryBuilder.join('');
    window.addEventListener('DOMContentLoaded', (event) => {
        document
            .querySelectorAll(query)
            .forEach(post => {
                post.hidden = false ;
            });
    });
})();
