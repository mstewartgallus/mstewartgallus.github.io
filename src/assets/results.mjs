import html from './html.mjs';
import css from './css.mjs';
import * as pf from './pagefind/pagefind.js';

const [results, resultscss] = await Promise.all([
    html('./results.html', import.meta.url),
    css('./results.css', import.meta.url)]);

function fromPagefind(post) {
    const { url,
            excerpt,
            meta: { title, date },
            filters: { tag, category } } = post;
    return {
        url,
        title,
        date,
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

    return (await pf.search(query, { filters })).results;
}

export default class SearchResults extends HTMLElement {
    static formAssociated = true;
    static observedAttributes = ['query', 'tag', 'category'];

    #list;
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

        this.#list = this.#shadow.getElementById('search-list');
        this.#entries = Array.from(this.#list.getElementsByTagName('li'));
    }

    connectedCallback() {
        for (const prop of SearchResults.observedAttributes) {
            if (!this.hasOwnProperty(prop)) {
                continue;
            }
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }

    formAssociatedCallback(form) {
        if (!form) {
            this.#abort.abort();
            return;
        }
        const abort = new AbortController();
        this.#abort = abort;
        form.addEventListener('submit',
                              async e => await this.#submit(e),
                              { signal: abort.signal });
    }

    async #submit(event) {
        const data = new FormData(event.target);

        const query = data.get(this.query) ?? '';
        const tags = data.getAll(this.tag);
        const categories = data.getAll(this.category);

        const posts = findPosts(query, { tags, categories });

        this.#clean();

        await this.#render(posts);
    }

    #clean() {
        this.#list.setAttribute('aria-hidden', 'true');

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

    async #render(postsPs) {
        const entries = this.#entries;
        const posts = (await postsPs).slice(0, this.#entries.length);

        const len = posts.length;

        const waiters = posts.map((postPs, ii) => {
            const li = entries[ii];
            const anchor = li.getElementsByTagName('a')[0];

            return (async () => {
                const post = fromPagefind(await postPs.data());
                anchor.href = post.url;
                anchor.textContent = post.title;
            })();
        });

        await Promise.all(waiters);

        for (let ii = 0; ii < len; ++ii) {
            entries[ii].setAttribute('aria-hidden', 'false');
        }

        this.#list.setAttribute('aria-hidden', 'false');
    }

    get query() {
        return this.getAttribute('query');
    }
    set query(x) {
        this.setAttribute('query', x);
    }

    get tag() {
        return this.getAttribute('tag');
    }
    set tag(x) {
        this.setAttribute('tag', x);
    }

    get category() {
        return this.getAttribute('category');
    }
    set category(x) {
        this.setAttribute('category', x);
    }
}

customElements.define("search-results", SearchResults);
