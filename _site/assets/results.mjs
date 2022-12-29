import html from './html.mjs';
import css from './css.mjs';
import * as pf from './pagefind/pagefind.js';
const results = await html('./results.html', import.meta.url);
const resultscss = await css('./results.css', import.meta.url);

function searchlink(p, x) {
    const params = new URLSearchParams({[p]: x});
    return `${pathname}?${params}`;
}

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

function fromPagefind(post) {
    const { url,
            excerpt,
            meta: { title, date },
            filters: { tag, category } } = post;
    return {
        url: url,
        title: title,
        date: date,
        categories: category ?? [],
        tags: tag ?? [],
        excerpt
    };
}

async function findPosts(query, options) {
    if ('' == query) {
        query = null;
    }

    const { categories, tags } = options;

    const filters = {};
    if (categories) {
        filters.category = Array.from(categories);
    }
    if (tags) {
        filters.tag = Array.from(tags);
    }

    return (await pf.search(query, { filters: filters })).results;
}

export default class SearchResults extends HTMLElement {
    static formAssociated = true;

    #posts;

    #entries;
    #abort;

    #internals;
    #shadow;

    constructor() {
        super();

        this.#shadow = this.attachShadow({mode: 'closed'});
        this.#internals = this.attachInternals();

        this.#shadow.replaceChildren(results.cloneNode(true));
        this.#shadow.adoptedStyleSheets = [resultscss];

        const list = this.#shadow.getElementById('search-list');
        this.#entries = Array.from(list.getElementsByTagName('li'));
    }

    formAssociatedCallback(form) {
        if (!form) {
            this.#abort.abort();
            return;
        }
        const abort = new AbortController();
        this.#abort = abort;
        form.addEventListener('submit',
                              async e => await this.#query(),
                              { signal: abort.signal });
    }

    async #query() {
        this.#busy();

        const data = new FormData(this.#internals.form);

        const query = data.get('s') ?? '';
        const tag = data.getAll('tag');
        const category = data.getAll('category');

        this.#posts = findPosts(query, {
            tags: tag,
            categories: category
        });

        await this.#render();
    }

    #busy() {
        const entries = this.#entries;
        const len = entries.length;
        for (let ii = 0; ii < len; ++ii) {
            const li = entries[ii];

            const anchor = li.getElementsByTagName('a')[0];
            if (!anchor) {
                return;
            }

            li.setAttribute('aria-hidden', 'true');
            anchor.removeAttribute('href');
        }
    }

    async #render() {
        const entries = this.#entries;
        const posts = (await this.#posts).slice(0, this.#entries.length);

        const len = posts.length;

        const waiters = posts.map((postPs, ii) => (async () => {
            const li = entries[ii];

            const anchor = li.getElementsByTagName('a')[0];
            if (!anchor) {
                return;
            }

            const post = fromPagefind(await postPs.data());

            anchor.href = post.url;
            anchor.textContent = post.title;
        })());

        await Promise.all(waiters);

        for (let ii = 0; ii < len; ++ii) {
            entries[ii].setAttribute('aria-hidden', 'false');
        }
    }
}

customElements.define("search-results", SearchResults);
