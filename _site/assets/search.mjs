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
        this.#query.textContent = x ? `${x} - ` : '';
    }
}, { 'extends': 'h1' });

customElements.define("search-result", class extends HTMLElement {
    #init = false;
    #shadow;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        if (this.#init) {
            return;
        }

        const template = this.ownerDocument.getElementById('search-result').content;

        const copy = this.ownerDocument.importNode(template, true);
        this.#shadow.appendChild(copy);

        this.#init = true;
    }
});

function renderPost(post, result) {
    const { title, url, date, tags, categories, excerpt } = post;

    const exc = document.createElement("div");
    exc.innerHTML = excerpt;

    result.append(
        Object.assign(
            document.createElement('a'),
            { slot: 'title',
              href: url,
              textContent: title }),
        Object.assign(
            document.createElement('time'),
            { slot: 'date',
              textContent: date }),
        ...categories.map(
            category =>
            Object.assign(document.createElement('a'),
                          {
                              slot: 'category',
                              href: searchlink('category', category),
                              textContent: category
                          })),
        ...tags.map(tag =>
            Object.assign(document.createElement('a'),
                          {
                              slot: 'tag',
                              href: searchlink('tag', tag),
                              textContent: `#${tag}`
                          })),
        exc);
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

    return (await (await pfimp).search(query, { filters: filters })).results;
}

async function renderPosts(search, results) {
    await Promise.all(
        search.map((r, ix) =>
            r.data()
                .then(post => {
                    renderPost(fromPagefind(post), results[ix]);
                })));
}

function anchorRequest(anchor) {
    const { href, nodeName, origin: tagOrigin } = anchor;
    if (nodeName !== 'A') {
        return;
    }

    if (tagOrigin !== origin) {
        return;
    }

    const good = {
        username: '',
        target: '',
        password: '',
        download: ''
    };
    for (const [k, v] of Object.entries(good)) {
        if (anchor[k] !== v) {
            return;
        }
    }

    if (!href) {
        return;
    }

    return new Request(href);
}

function modifierKey(event) {
    const { ctrlKey, altKey, shiftKey, metaKey } = event;
    return ctrlKey || altKey || shiftKey || metaKey;
}

function clickRequest(event) {
    const { button, buttons, target } = event;

    if (modifierKey(event)) {
        return;
    }

    // filter to non modifier, non chorded mouse clicks
    if (button != 0 || buttons != 0) {
        return;
    }

    return anchorRequest(target);
}

function keydownRequest(event) {
    const { isComposing, key, target } = event;

    if (isComposing) {
        return;
    }

    if (modifierKey(event)) {
        return;
    }

    if (key !== "Enter") {
        return;
    }

    return anchorRequest(target);
}

function submitRequest(event) {
    const { submitter, target: form } = event;

    // work around an incorrect action string for .formAction here
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

function parseParams(params) {
    return {
        query: params.get('s') ?? '',
        category: new Set(params.getAll('category')),
        tag: new Set(params.getAll('tag'))
    };
}


function route(req) {
    const { method, url } = req;
    const { searchParams, pathname } = new URL(url);

    switch (pathname) {
    case '/search/':
        switch (method) {
        case 'GET':
            return () => search(searchParams);
        }
        break;
    }
}

let targeting = false;

function target(url) {
    // FIXME what to place here?
    const fallback = '#';

    let { hash } = new URL(url);
    if (hash == '') {
        hash = fallback;
    }

    // This is a little ugly but replace can trigger popstate (at
    // least in Chrome) and lead to a stack overflow
    targeting = true;
    location.replace(hash);
    targeting = false;
}

function keydown(event) {
    const r = keydownRequest(event);
    if (!r) {
        return;
    }

    const action = route(r);
    if (!action) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);
    target(r.url);

    action();
}

function click(event) {
    const r = clickRequest(event);
    if (!r) {
        return;
    }

    const action = route(r);
    if (!action) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);
    target(r.url);

    action();
}

function submit(event) {
    const r = submitRequest(event);
    if (!r) {
        return;
    }

    const action = route(r);
    if (!action) {
        return;
    }

    event.preventDefault();

    history.pushState(null, '', r.url);
    target(r.url);

    action();
}

function popstate(event) {
    if (targeting) {
        return;
    }

    const r = new Request(location);

    const action = route(r);
    if (!action) {
        return;
    }

    target(r.url);

    action();
}

const doctitle = document.title;

async function search(searchParams) {
    const { query, category, tag } = parseParams(searchParams);

    // FIXME set options for tags/category
    const postsPs = findPosts(query, {
        tags: tag,
        categories: category
    });

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

    const h1 = document.getElementById('title');
    const input = document.getElementById('search-input');

    const output = document.getElementById('search-output');
    const categoryEl = document.getElementById('category');
    const tagEl = document.getElementById('tag');

    input && (input.value = query);
    h1 && (h1.dataset.query = query);

    document.title = `${query} — ${doctitle}`;

    if (categoryEl) {
        for (const option of categoryEl.options) {
            option.selected = category.has(option.value);
        }
    }

    if (tagEl) {
        for (const option of tagEl.options) {
            option.selected = tag.has(option.value);
        }
    }

    if (output) {
        const posts = await postsPs;

        const ul = document.createElement('ul');

        const lis = posts.map(() => document.createElement('li'));
        ul.append(...lis);

        const results = lis.map(li => {
            const result = document.createElement('search-result');
            li.append(result);
            return result;
        });

        // FIXME aria-busy has poor support
        output.ariaBusy = true;
        output.replaceChildren(ul);
        await renderPosts(posts, results);
        output.ariaBusy = false;
    }
}

document.addEventListener('click', click);
document.addEventListener('keydown', keydown);

document.addEventListener('submit', submit);
window.addEventListener('popstate', popstate);

search(searchParams);
