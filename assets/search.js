---
layout: none
---

(() => {
    'use strict';

    const values = (target) =>
          Array.from(target.options)
          .filter(o => o.selected)
          .map(o => o.value);

    window.addEventListener('DOMContentLoaded', (event) => {
        const category = document.querySelector('[name="post-filter"] [name="category"]');
        const tag = document.querySelector('[name="post-filter"] [name="tag"]');
        const posts = document.querySelectorAll('[itemProp="blogPost"]');

        const c = {
            categories: values(category),
            tags: values(tag)
        };

        const redisplay = () => {
            const catList = c
                  .categories
                  .map(cat => `[data-category~="${cat}"]`)
                  .join(',');
            const tagList = c
                  .tags
                  .map(tag => `[data-tag~="${tag}"]`)
                  .join(',');
            const query = `[itemProp="blogPost"]:where(${catList}):where(${tagList})`;
            posts.forEach(post => {
                post.style.display = 'none';
            });
            document
                .querySelectorAll(query)
                .forEach(post => {
                    post.style.display = 'initial';
                });
        };

        category.addEventListener('change', (event) => {
            c.categories = values(event.target);
            redisplay();
        });
        tag.addEventListener('change', (event) => {
            c.tags = values(event.target);
            redisplay();
        });
    });
})();
