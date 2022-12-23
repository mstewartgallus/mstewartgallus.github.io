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

customElements.define("search-h1", class extends HTMLHeadingElement {
    static observedAttributes = ['data-query'];
    #query;
    #shadow;

    constructor() {
        super();

        this.#shadow = this.attachShadow({
            mode: 'closed',
            delegatesFocus: false
        });
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

    attributeChangedCallback(n, o, x) {
        this.#query.textContent = x ? `${x}\u2009—\u2009` : '';
    }
}, { 'extends': 'h1' });


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

function target(url) {
    let { hash } = new URL(url);

    if (hash == '') {
        hash = '#';
    }

    targeting = true;
    location.replace(hash);
    targeting = false;
}

async function genericSubmit(event) {
    const r = submitRequest(event);
    if (!r) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);

    target(r.url);

    const h1 = document.getElementsByTagName('h1')[0];
    if (h1) {
        h1.tabIndex = -1;
        h1.focus();
    }
}

function setInput(event) {
    const params = new URL(window.location).searchParams;
    const query = params.get('s') ?? '';

    const input = document.getElementById('search-input');
    if (!input) {
        return;
    }

    input.value = query;
}

function setTag(event) {
    const params = new URL(window.location).searchParams;
    const tag = new Set(params.getAll('tag'));

    const tagEl = document.getElementById('tag');
    if (!tagEl) {
        return;
    }

    for (const option of tagEl.elements) {
        option.checked = tag.has(option.value);
    }
}

function setCategory(event) {
    const params = new URL(window.location).searchParams;
    const category = new Set(params.getAll('category'));

    const categoryEl = document.getElementById('category');
    if (!categoryEl) {
        return;
    }

    for (const option of categoryEl.elements) {
        option.checked = category.has(option.value);
    }
}

const doctitle = document.title;

function setTitle(event) {
    const form = event.target;
    const data = new FormData(form);
    const query = data.get('s') ?? '';

    document.title = `${query} — ${doctitle}`;
}

function setH1(event) {
    const form = event.target;
    const data = new FormData(form);
    const query = data.get('s') ?? '';

    const h1 = document.getElementById('title');
    if (!h1) {
        return;
    }

    h1.dataset.query = query;
}

async function renderList(event) {
    const form = event.target;
    const data = new FormData(form);

    const query = data.get('s') ?? '';
    const category = data.getAll('category');
    const tag = data.getAll('tag');

    const postsPs = findPosts(query, {
        tags: tag,
        categories: category
    });

    const list = document.getElementById('search-list');
    if (!list) {
        return;
    }

    const lis = Array.from(list.getElementsByTagName('li'));

    for (let ii = 0; ii < lis.length; ++ii) {
        const li = lis[ii];

        const output = li.getElementsByTagName('output')[0];
        if (!output) {
            continue;
        }
        const anchor = output.getElementsByTagName('a')[0];
        if (!anchor) {
            continue;
        }

        // FIXME figure out aria-busy portability nonsense
        li.setAttribute('aria-hidden', 'true');
    }

    const posts = (await postsPs).slice(0, lis.length);

    for (let ii = 0; ii < lis.length; ++ii) {
        const li = lis[ii];

        const output = li.getElementsByTagName('output')[0];
        if (!output) {
            continue;
        }
        const anchor = output.getElementsByTagName('a')[0];
        if (!anchor) {
            continue;
        }

        const postPs = posts[ii];
        if (!postPs) {
            continue;
        }

        const post = fromPagefind(await postPs.data());

        anchor.href = post.url;
        anchor.textContent = post.title;

        li.setAttribute('aria-hidden', 'false');
    }
}

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

document.addEventListener('submit', genericSubmit);

window.addEventListener('popstate', setInput);
window.addEventListener('popstate', setCategory);
window.addEventListener('popstate', setTag);

window.dispatchEvent(new PopStateEvent('popstate'));

const search = document.getElementById('search');
search.addEventListener('submit', setTitle);
search.addEventListener('submit', renderList);
search.requestSubmit();
