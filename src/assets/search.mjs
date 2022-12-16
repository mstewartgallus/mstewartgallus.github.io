window.history.scrollRestoration = 'manual';

const pathname = new URL(document.URL).pathname;

function search(p, x) {
    const params = new URLSearchParams({[p]: x});
    return `${pathname}?${params}`;
}

function toset(x) {
    if (!x || x == '') {
        return new Set();
    }
    return new Set(x.split(' '));
}

// history.scrollRestoration = 'manual';

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

const readyState = document.readyState;
const ready = readyState == 'interactive' || readyState == 'complete';
const DOMContentLoaded = ready ? Promise.resolve(null) :
      new Promise(r => {
          window.addEventListener('DOMContentLoaded', r);
      });

async function id(x) {
    await DOMContentLoaded;
    return document.getElementById(x);
}

customElements.define("search-title", class extends HTMLTitleElement {
    static observedAttributes = ['data-query'];
    #title;

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        if (this.#title) {
            return;
        }

        this.#title = this.text;
    }

    attributeChangedCallback(n, o, x) {
        this.text =
            x ?
            `${x} — ${this.#title}` :
            this.#title;
    }
}, { 'extends': 'title' });

const searchH1 = id('search-h1');

customElements.define("search-h1", class extends HTMLHeadingElement {
    static observedAttributes = ['data-query'];
    #query;

    async connectedCallback() {
        const template = (await searchH1).content;

        if (!this.isConnected) {
            return;
        }

        if (this.#query) {
            return;
        }

        const shadow = this.attachShadow({
            mode: 'closed',
            delegatesFocus: false
        });

        const copy = this.ownerDocument.importNode(template, true);
        shadow.appendChild(copy);
        this.#query = shadow.getElementById('query');
    }

    attributeChangedCallback(n, o, x) {
        this.#query.textContent = x ? `${x} - ` : '';
    }
}, { 'extends': 'h1' });


const searchArticle = id('search-article');

customElements.define("search-article", class extends HTMLElement {
    #init = false;

    async connectedCallback() {
        const template = (await searchArticle).content;

        if (!this.isConnected) {
            return;
        }

        if (this.#init) {
            return;
        }

        const copy = this.ownerDocument.importNode(template, true);
        this.attachShadow({ mode: 'closed' }).appendChild(copy);
        this.#init = true;
    }
}, { 'extends': 'article' });

function renderPost(post) {
    const { title, url, date, tags, categories } = post;

    const frag = new DocumentFragment();

    frag.appendChild(
        Object.assign(
            document.createElement('a'),
            { slot: 'title',
              href: url,
              textContent: title }));

    frag.appendChild(
        Object.assign(
            document.createElement('time'),
            { slot: 'date',
              textContent: date }));

    for (const category of categories) {
        const anchor = document.createElement('a');
        anchor.slot = 'category';
        anchor.href = search('category', category);
        anchor.textContent = category;
        frag.appendChild(anchor);
    }

    for (const tag of tags) {
        const anchor = document.createElement('a');
        anchor.slot = 'tag';
        anchor.href = search('tag', tag);
        anchor.textContent = `#${tag}`;
        frag.appendChild(anchor);
    }

    const article = document.createElement("article", {is: 'search-article' });
    article.appendChild(frag);

    const li = document.createElement("li");
    li.appendChild(article);
    return li;
}

function fromPagefind(post) {
    const { url,
            meta: { title, date },
            filters: { tag, category } } = post;
    return {
        url: url,
        title: title,
        date: date,
        categories: category ?? [],
        tags: tag ?? []
    };
}

const pfimp = import('./pagefind/pagefind.js');

async function findAndRenderPosts(query, options) {
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
    const search = await (await pfimp).search(query, {
        filters: filters
    });

    const posts =
          search.results
          .map(r =>
              r.data()
                  .then(post => renderPost(fromPagefind(post))));

    const list = document.createElement('ul');
    list.append(...await Promise.all(posts));
    return list;
}

function clickRequest(origin, event) {
    if (event.button != 0) {
        return;
    }

    const tag = event.target;

    const good = {
        nodeName: 'A',
        origin: origin,
        username: '',
        target: '',
        password: '',
        download: ''
    };
    for (const [k, v] of Object.entries(good)) {
        if (tag[k] !== v) {
            return;
        }
    }

    const href = tag.href;
    if (!href) {
        return;
    }

    return new Request(href);
}

function submitRequest(origin, event) {
    const form = event.target;
    const submitter = event.submitter;

    // work around an incorrect action string for .formAction here
    const action = submitter?.getAttribute('formaction') ?? form.action;
    const method = submitter?.getAttribute('method') ?? form.method;

    let url = new URL(action, origin);
    if (url.origin != origin) {
        return;
    }

    const formdata = new FormData(form);
    const options = { method: method };
    if (form.method === 'get') {
        const params = new URLSearchParams(formdata);
        for (const [key, value] of url.searchParams) {
            params.append(key, value);
        }
        url = new URL(url.origin + url.pathname + "?" + params);
    } else {
        options.body = formdata;
    }

    return new Request(url, options);
}

function target(window, hash, fallback) {
    if (hash == '') {
        hash = fallback;
    }

    window.location.replace(hash);
}

customElements.define('search-body', class extends HTMLBodyElement {
    #init = false;

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        if (this.#init) {
            return;
        }

        this.addEventListener('click', e => this.#click(e));
        this.addEventListener('submit', e => this.#submit(e));
        this.addEventListener('popstate', e => this.#popstate(e));

        this.#init = true;
    }

    #serve(request) {
        const location = new URL(request.url);
        const params = location.searchParams;

        // FIXME consider using errors for control flow?
        return {
            '/search/': {
                'GET': () => {
                    const query = params.get('s') ?? '';
                    const category = Array.from(new Set(params.getAll('category'))).join('');
                    const tag = Array.from(new Set(params.getAll('tag'))).join('');

                    if (this.dataset.query !== query) {
                        this.dataset.query = query;
                    }

                    if (this.dataset.category !== category) {
                        this.dataset.category = category;
                    }
                    if (this.dataset.tag !== tag) {
                        this.dataset.tag = tag;
                    }

                    return true;
                }
            }
        }?.[location.pathname]?.[request.method]?.();
    }

    #target(url) {
        // FIXME what if no id or h1?
        const h1 = this.getElementsByTagName('h1')[0];
        const fallback = '#' + encodeURIComponent(h1.id);

        const hash = new URL(url).hash;

        target(this.ownerDocument.defaultView, hash, fallback);
    }

    #request(request) {
        const handled = this.#serve(request);
        if (!handled) {
            return false;
        }

        this.ownerDocument.defaultView.history.pushState(null, '', request.url);
        this.#target(request.url);

        return true;
    }

    #click(event) {
        const request = clickRequest(this.#origin(), event);
        if (!request) {
            return;
        }

        if (this.#request(request)) {
            event.preventDefault();
        }
    }

    #submit(event) {
        const request = submitRequest(this.#origin(), event);
        if (!request) {
            return;
        }

        if (this.#request(request)) {
            event.preventDefault();
        }
    }

    #popstate(event) {
        const url = this.ownerDocument.defaultView.location;
        this.#serve(new Request(url));
    }

    #origin() {
        return this.ownerDocument.location.origin;
    }
}, { 'extends': 'body' });

await DOMContentLoaded;

const body = document.body;

const title = document.getElementsByTagName('title')[0];
const h1 = document.getElementById('title');
const input = document.getElementById('search-input');

const output = document.getElementById('search-output');
const categoryEl = document.getElementById('category');
const tagEl = document.getElementById('tag');

new MutationObserver(async () => {
    const query = body.dataset.query;
    const tags = toset(body.dataset.tag);
    const categories = toset(body.dataset.category);

    if (categoryEl) {
        for (const option of categoryEl.options) {
            option.selected = categories.has(option.value);
        }
    }

    if (tagEl) {
        for (const option of tagEl.options) {
            option.selected = tags.has(option.value);
        }
    }

    if (output) {
        // FIXME set options for tags/category
        const ul = await findAndRenderPosts(query,
                                            {
                                                tags: tags,
                                                categories: categories
                                            });
        output.replaceChildren(ul);
        output.removeAttribute('hidden');
    }
}).observe(body, {
    attributeFilter: ['data-query', 'data-category', 'data-tag']
});

new MutationObserver(async () => {
    const query = body.dataset.query;

    input && (input.value = query);
    title && (title.dataset.query = query);
    h1 && (h1.dataset.query = query);
}).observe(body, { attributeFilter: ['data-query'] });

// FIXME not sure why initialization should be like this
const params = new URL(document.URL).searchParams;
const s = params.get('s');
const category = new Set(params.getAll('category'));
const tag = new Set(params.getAll('tag'));

body.dataset.query = s ?? '';
body.dataset.category = Array.from(category).join(' ');
body.dataset.tag = Array.from(tag).join(' ');
