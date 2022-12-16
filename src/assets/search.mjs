history.scrollRestoration = 'manual';

const { origin, pathname, searchParams } = new URL(location);

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

function clickRequest(event) {
    const { button, target: tag } = event;
    if (button != 0) {
        return;
    }

    const { href, nodeName, origin: tagOrigin } = tag;
    if (nodeName != 'A') {
        return;
    }

    if (tagOrigin != origin) {
        return;
    }

    const good = {
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

    if (!href) {
        return;
    }

    return new Request(href);
}

function submitRequest(event) {
    const { submitter, target: form } = event;

    // work around an incorrect action string for .formAction here
    const action = submitter?.getAttribute('formaction') ?? form.action;
    const method = submitter?.getAttribute('method') ?? form.method;

    let url = new URL(action, origin);
    const { origin: urlOrigin, pathname, searchParams } = url;
    if (urlOrigin != origin) {
        throw new RequestError('bad origin');
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

function parseParams(params) {
    return {
        query: params.get('s') ?? '',
        category: new Set(params.getAll('category')),
        tag: new Set(params.getAll('tag'))
    };
}

function formatParams(params) {
    const { query, category, tag } = params;
    return {
        query: query,
        category: Array.from(category).join(' '),
        tag: Array.from(tag).join(' ')
    };
}

await DOMContentLoaded;

const body = document.body;

const title = document.getElementsByTagName('title')[0];
const h1 = document.getElementById('title');
const input = document.getElementById('search-input');

const output = document.getElementById('search-output');
const categoryEl = document.getElementById('category');
const tagEl = document.getElementById('tag');

function serve(req) {
    const { method, url } = req;
    const { searchParams, pathname } = new URL(url);

    return {
        '/search/': {
            'GET': () => parseParams(searchParams)
        }
    }?.[pathname]?.[method]?.();
}

function target(url) {
    // FIXME what if no id or h1?
    const fallback = '#' + encodeURIComponent(h1.id);

    let { hash } = new URL(url);
    if (hash == '') {
        hash = fallback;
    }

    location.replace(hash);
}

function click(event) {
    const r = clickRequest(event);
    if (!r) {
        return;
    }

    const data = serve(r);
    if (!data) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);
    target(r.url);

    Object.assign(body.dataset, formatParams(data));
}

function submit(event) {
    const r = submitRequest(event);
    if (!r) {
        return;
    }

    const data = serve(r);
    if (!data) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);
    target(r.url);

    Object.assign(body.dataset, formatParams(data));
}

function popstate(event) {
    const r = new Request(location);
    const data = serve(r);
    if (!data) {
        return;
    }

    target(r.url);

    Object.assign(body.dataset, formatParams(data));
}

document.addEventListener('click', click);
document.addEventListener('submit', submit);
window.addEventListener('popstate', popstate);

new MutationObserver(async () => {
    const { query, tag, category } = body.dataset;
    const tags = toset(tag);
    const categories = toset(category);

    input && (input.value = query);
    title && (title.dataset.query = query);
    h1 && (h1.dataset.query = query);

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

// FIXME not sure why initialization should be like this
Object.assign(body.dataset,
              formatParams(parseParams(searchParams)));
