import html from './html.mjs';
import css from './css.mjs';
import * as pf from './pagefind/pagefind.js';

const [results, resultscss] = await Promise.all([
    html(import.meta.resolve('./results.html')),
    css(import.meta.resolve('./results.css'))]);

function fromPagefind(post) {
    const { url,
            excerpt,
            meta: { title, date },
            filters: { tag, character, place, category } } = post;
    return { url, title, date,
        categories: category ?? [],
        tag: tag ?? [],
        character: character ?? [],
        place: place ?? [],
        excerpt
    };
}

async function findPosts(query, options) {
    if ('' == query) {
        query = null;
    }

    const { category, tag, place, character } = options;

    const filters = {};
    if (category) {
        filters.category = Array.from(category);
    }
    if (tag) {
        filters.tag = Array.from(tag);
    }
    if (character) {
        filters.character = Array.from(character);
    }
    if (place) {
        filters.place = Array.from(place);
    }

    return (await pf.search(query, { filters })).results;
}

export default class SearchResults extends HTMLElement {
    static formAssociated = true;
    static observedAttributes = ['query', 'tag', 'character', 'place', 'category'];

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
        const tag = data.getAll(this.tag);
        const character = data.getAll(this.character);
        const category = data.getAll(this.category);
        const place = data.getAll(this.place);

        const posts = findPosts(query, { tag, category, character, place });

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

    get character() {
        return this.getAttribute('character');
    }
    set character(x) {
        this.setAttribute('character', x);
    }

    get place() {
        return this.getAttribute('place');
    }
    set place(x) {
        this.setAttribute('place', x);
    }

    get category() {
        return this.getAttribute('category');
    }
    set category(x) {
        this.setAttribute('category', x);
    }
}

customElements.define("search-results", SearchResults);
