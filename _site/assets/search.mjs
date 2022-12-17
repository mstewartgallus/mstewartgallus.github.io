history.scrollRestoration = 'manual';

const { origin, pathname, searchParams } = new URL(location);

function searchlink(p, x) {
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

(async () => {
    await DOMContentLoaded;
    const template = document.getElementById('search-h1').content;

    customElements.define("search-h1", class extends HTMLHeadingElement {
        static observedAttributes = ['data-query'];
        #query;

        connectedCallback() {
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
})();

(async () => {
    const template = document.getElementById('search-result').content;

    customElements.define("search-result", class extends HTMLElement {
        #init = false;

        connectedCallback() {
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
    });
})();

function renderPost(post) {
    const { title, url, date, tags, categories } = post;

    const result = document.createElement("search-result");
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
                          })));
    const li = document.createElement("li");
    li.append(result);
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

await DOMContentLoaded;

const title = document.getElementsByTagName('title')[0];
const h1 = document.getElementById('title');
const input = document.getElementById('search-input');

const output = document.getElementById('search-output');
const categoryEl = document.getElementById('category');
const tagEl = document.getElementById('tag');

async function search(searchParams) {
    const { query, category, tag } = parseParams(searchParams);

    input && (input.value = query);
    title && (title.dataset.query = query);
    h1 && (h1.dataset.query = query);

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
        // FIXME set options for tags/category
        const ul = await findAndRenderPosts(query,
                                            {
                                                tags: tag,
                                                categories: category
                                            });
        output.replaceChildren(ul);
        output.removeAttribute('hidden');
    }
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

document.addEventListener('click', click);
document.addEventListener('keydown', keydown);

document.addEventListener('submit', submit);
window.addEventListener('popstate', popstate);

await search(searchParams);
