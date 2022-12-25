const pfimp = import('./pagefind/pagefind.js');

history.scrollRestoration = 'manual';

const { origin, pathname, searchParams } = new URL(location);

function searchlink(p, x) {
    const params = new URLSearchParams({[p]: x});
    return `${pathname}?${params}`;
}

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

customElements.define("search-h1", class extends HTMLElement {
    static formAssociated = true;

    #query;
    #abort;

    #shadow;
    #internals;

    constructor() {
        super();

        this.#shadow = this.attachShadow({mode: 'closed'});
        this.#internals = this.attachInternals();
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        if (this.#query) {
            return;
        }

        const template = this.ownerDocument.getElementById('search-h1').content;

        const copy = this.ownerDocument.importNode(template, true);
        this.#shadow.appendChild(copy);
        this.#query = this.#shadow.getElementById('query');
    }

    disconnectedCallback() {
        this.#query = null;
    }

    formAssociatedCallback(form) {
        if (!form) {
            this.#abort.abort();
            return;
        }
        const abort = new AbortController();
        this.#abort = abort;
        form.addEventListener('submit',
                              e => this.#update(),
                              { signal: abort.signal });
    }

    #update() {
        if (!this.#query) {
            return;
        }

        const data = new FormData(this.#internals.form);

        const query = data.get('s') ?? '';

        this.#query.textContent = query !== '' ? `${query}\u2009—\u2009` : '';
    }
});

customElements.define("search-results", class extends HTMLElement {
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
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        if (this.#entries) {
            return;
        }

        const template = this.ownerDocument.getElementById('search-results').content;

        const copy = this.ownerDocument.importNode(template, true);
        this.#shadow.replaceChildren(copy);

        const list = this.#shadow.getElementById('search-list');
        this.#entries = Array.from(list.getElementsByTagName('li'));
    }

    disconnectedCallback() {
        this.#entries = null;
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
});

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

    return (await (await pfimp).search(query, { filters: filters })).results;
}

function submitRequest(event) {
    const { submitter, target: form } = event;

    const action = submitter?.getAttribute('formaction') ?? form.action;
    const method = submitter?.getAttribute('method') ?? form.method;

    let url = new URL(action, origin);
    const { origin: urlOrigin, pathname, searchParams } = url;
    if (urlOrigin != origin) {
        return;
    }

    const formdata = new FormData(form);
    const options = { method: method };
    if (method === 'get') {
        const params = new URLSearchParams(formdata);
        for (const [key, value] of searchParams) {
            params.append(key, value);
        }
        url = new URL(urlOrigin + pathname + "?" + params);
    } else {
        options.body = formdata;
    }

    return new Request(url, options);
}

let targeting = false;

function target(hash) {
    if (hash == '') {
        hash = '#';
    }

    if (targeting) {
        return;
    }
    targeting = true;

    document.documentElement.focus({ preventScroll: true });
    location.replace(hash);

    targeting = false;
}

const doctitle = document.title;

function hashless(url) {
    return new URL(url.origin + url.pathname + url.search);
}

function setURLSubmit(event) {
    const r = submitRequest(event);
    if (!r) {
        return;
    }

    event.preventDefault();

    let url = r.url;
    if (new URL(url).hash == '') {
        url = url + '#';
    }

    const { hash, searchParams } = new URL(url);

    const query = searchParams.get('s') ?? '';
    const title = query !== '' ? `${query}\u2009—\u2009${doctitle}` : '';

    document.title = title;

    // FIXME detect replace request
    // dedup as a temporary hack
    if (url === window.location.toString()) {
        return;
    }

    history.pushState(null, '', url);
    target(hash);
}

function setInput(event) {
    const { searchParams } = new URL(window.location);
    const query = searchParams.get('s') ?? '';

    const input = document.getElementById('search-input');
    if (!input) {
        return;
    }

    input.value = query;
}

function setTag(event) {
    const { searchParams } = new URL(window.location);
    const tag = new Set(searchParams.getAll('tag'));

    const tagEl = document.getElementById('tag');
    if (!tagEl) {
        return;
    }

    for (const option of tagEl.elements) {
        option.checked = tag.has(option.value);
    }
}

function setCategory(event) {
    const { searchParams } = new URL(window.location);
    const category = new Set(searchParams.getAll('category'));

    const categoryEl = document.getElementById('category');
    if (!categoryEl) {
        return;
    }

    for (const option of categoryEl.elements) {
        option.checked = category.has(option.value);
    }
}

document.addEventListener('submit', setURLSubmit);

switch (document.readyState) {
case 'interactive':
case 'complete':
    break;

default:
    await new Promise(r => {
        window.addEventListener('DOMContentLoaded', r);
    });
    break;
}

window.addEventListener('popstate', setInput);
window.addEventListener('popstate', setCategory);
window.addEventListener('popstate', setTag);

const search = document.getElementById('search');

window.addEventListener('popstate', () => {
    // FIXME make this replace/not push
    search.requestSubmit();
});

window.dispatchEvent(new PopStateEvent('popstate'));
