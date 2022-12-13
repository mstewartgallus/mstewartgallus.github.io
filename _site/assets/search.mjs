import Fuse from './vend/fuse.mjs' ;

history.scrollRestoration = 'manual';

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

const index = fetchjson("/assets/index.json");
const search = fetchjson("/assets/search.json");
const urls = fetchjson("/assets/urls.json");

const options = Object.freeze({
    ignoreLocation: true,
    keys: ['title', 'content', 'tags', 'categories'],
    getFn: (obj, path) => {
        const value = Fuse.config.getFn(obj, path);
        console.log(['get', obj, path, value]);
        return value;
    }
});

const database = (async () => {
    return new Fuse(await search, options, Fuse.parseIndex(await index));
})();

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

function renderPost(doc, post) {
    const { title, url, date, tags, categories } = post;

    const frag = new DocumentFragment();

    frag.appendChild(
        Object.assign(
            doc.createElement('a'),
            { slot: 'title',
              href: url,
              textContent: title }));

    frag.appendChild(
        Object.assign(
            doc.createElement('time'),
            { slot: 'date',
              textContent: date }));

    for (const category of categories) {
        const params = new URLSearchParams({s: category});
        const anchor = doc.createElement('a');
        anchor.slot = 'category';
        anchor.href = `?${params}`;
        anchor.textContent = category;
        frag.appendChild(anchor);
    }

    for (const tag of tags) {
        const params = new URLSearchParams({s: tag});
        const anchor = doc.createElement('a');
        anchor.slot = 'tag';
        anchor.href = `?${params}`;
        anchor.textContent = `#${tag}`;
        frag.appendChild(anchor);
    }

    const article = doc.createElement("article", {is: 'search-article' });
    article.appendChild(frag);

    const li = doc.createElement("li");
    li.appendChild(article);
    return li;
}

function renderPosts(doc, posts) {
    const frag = new DocumentFragment();
    for (const post of posts) {
        frag.appendChild(renderPost(doc, post));
    }

    const list = doc.createElement('ul');
    list.appendChild(frag);
    return list;
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

        this.addEventListener('hashchange', e => this.#hashchange(e));
        this.addEventListener('click', e => this.#click(e));
        this.addEventListener('submit', e => this.#submit(e));
        this.addEventListener('popstate', e => this.#popstate(e));

        this.#init = true;
    }

    #request(request) {
        const location = new URL(request.url);

        return {
            '/search/': {
                'GET': () => {
                    this.dataset.query = location.searchParams.get('s');
                    return true;
                }
            }
        }?.[location.pathname]?.[request.method]?.();
    }

    #hashchange(event) {
        if (this.#request(new Request(event.newURL))) {
            event.preventDefault();
        }
    }

    #click(event) {
        if (event.button != 0) {
            return;
        }

        const tag = event.target;

        const good = {
            nodeName: 'A',
            origin: this.#origin(),
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

        if (this.#request(new Request(href))) {
            this.ownerDocument.defaultView.history
                .pushState(null, '', href);
            event.preventDefault();
        }
    }

    #submit(event) {
        const form = event.target;
        const submitter = event.submitter;

        let action;
        let method;
        if (submitter) {
            action = submitter.formAction;
            method = submitter.formMethod;
            if (method == '') {
                method = null;
            }
        }
        action ??= form.action;
        method ??= form.method;

        let url = new URL(action, this.#origin());
        if (url.origin != this.#origin()) {
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

        if (this.#request(new Request(url, options))) {
            this.ownerDocument.defaultView.history
                .pushState(null, '', url);
            event.preventDefault();
        }
    }

    #popstate(event) {
        this.#request(new Request(this.ownerDocument.URL));
    }

    #origin() {
        return this.ownerDocument.location.origin;
    }
}, { 'extends': 'body' });


await DOMContentLoaded;

const fuse = await database;
const metadata = await urls;

function lookup(item, index) {
    const url = metadata.urls[index];
    const date = metadata.dates[index];
    return {
        title: item.title,
        url: url,
        date: date,
        tags: item.tags,
        categories: item.categories
    };
}

function onsearch(query) {
    const title = document.getElementsByTagName('title')[0];
    const h1 = document.getElementById('title');
    const output = document.getElementById('search-output');
    const results = document.getElementById('search-results');
    const input = document.getElementById('search-input');

    title && (title.dataset.query = query);
    h1 && (h1.dataset.query = query);
    input && (input.value = query);
    results && (results.dataset.query = query);

    if (output) {
        const posts = fuse
              .search(query ?? '', { limit: 10 })
              .map(p => lookup(p.item, p.refIndex));
        const ul = renderPosts(document, posts);
        output.replaceChildren(ul);
        output.removeAttribute('hidden');
    }

    // FIXME don't do this first time
    // FIXME avoid setting tabIndex ?
    // FIXME wrong location for logic
    if (h1) {
        h1.tabIndex = -1;
        h1.focus();
        // FIXME test out on screen reader, maybe try queueMicrotask?
        h1.blur();
    }
}

function onmutation(mutationList, observer) {
    for (const mutation of mutationList) {
        const query = mutation.target.dataset.query;
        queueMicrotask(() => onsearch(query));
    }
}

const observer = new MutationObserver(onmutation);

const body = document.body;
observer.observe(body, { attributeFilter: ['data-query'] });

// FIXME not sure why initialization should be like this
const s = new URL(document.URL).searchParams.get('s');
s && (body.dataset.query = s);
