import Fuse from './vend/fuse.mjs' ;

history.scrollRestoration = 'manual';

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

const index = fetchjson("/assets/index.json");
const search = fetchjson("/assets/search.json");

const options = Object.freeze({
    ignoreLocation: true,
    keys: ['title', 'content', 'tags', 'categories', 'date']
});

const database = (async () =>
    new Fuse(await search, options,
             Fuse.parseIndex(await index)))();

const DOMContentLoaded =
      (() => {
          switch (document.readyState) {
          case 'interactive':
          case 'complete':
              return Promise.resolve(null);
          default:
              return new Promise(r => {
                  window.addEventListener('DOMContentLoaded', r);
              });
          }
      })();

async function id(x) {
    await DOMContentLoaded;
    return document.getElementById(x);
}

customElements.define("search-title", class extends HTMLTitleElement {
    static observedAttributes = ['data-query'];
    #title;

    constructor() {
        super();
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
        shadow.replaceChildren(copy);
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
        this.attachShadow({ mode: 'closed' })
            .append(copy);
        this.#init = true;
    }
}, { 'extends': 'article' });

function renderPost(doc, post) {
    const title = Object.assign(
        doc.createElement('a'),
        {
            slot: 'title',
            href: post.url,
            textContent: post.title });

    const date = Object.assign(
        doc.createElement('time'),
        { slot: 'date',
          textContent: post.date });

    const cats = post.categories.map(category => {
        const params = new URLSearchParams({s: category});
        return Object.assign(
            doc.createElement("a"),
            { slot: 'category',
              textContent: category,
              href: `?${params}` });
    });

    const tags = post.tags.map(tag => {
        const params = new URLSearchParams({s: tag});
        return Object.assign(
            doc.createElement("a"),
            {
                slot: 'tag',
                textContent: `#${tag}`,
                href: `?${params}`
            });
    });

    const article = doc.createElement("article", {is: 'search-article' });
    article.append(title, date, ...cats, ...tags);

    const li = doc.createElement("li");
    li.append(article);
    return li;
}

function renderPosts(doc, fuse, query) {
    const posts = fuse
          .search(query ?? '')
          .map(post => renderPost(doc, post.item));

    const list = doc.createElement('ul');
    list.append(...posts);
    return list;
}

customElements.define("search-body", class extends HTMLBodyElement {
    constructor() {
        super();
        this.addEventListener('hashchange', e => this.#hashchange(e));
        this.addEventListener('click', e => this.#click(e));
        this.addEventListener('submit', e => this.#submit(e));
        this.addEventListener('popstate', e => this.#popstate(e));
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        this.#request(new Request(this.ownerDocument.URL));
    }

    #request(request) {
        const location = new URL(request.url);

        const success = {
            '/search/': {
                'GET': () => {
                    this.dataset.query = location.searchParams.get('s');
                    return true;
                }
            }
        }?.[location.pathname]?.[request.method]?.();

        if (!success) {
            return false;
        }

        // FIXME don't do this first time
        // FIXME avoid setting tabIndex ?
        const h1 = this.ownerDocument.getElementsByTagName('h1')[0];
        if (h1) {
            h1.tabIndex = -1;
            h1.focus();
            // FIXME test out on screen reader, maybe try queueMicrotask?
            h1.blur();
        }

        return true;
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
        const posts = renderPosts(document, fuse, query);
        output.replaceChildren(posts);
        output.removeAttribute('hidden');
    }
}

function onsearchdelay(query) {
    queueMicrotask(() => onsearch(query), 0);
}

function onmutation(mutationList, observer) {
    for (const mutation of mutationList) {
        onsearchdelay(mutation.target.dataset.query);
    }
}


const observer = new MutationObserver(onmutation);

const body = document.body;
onsearchdelay(body.dataset.query);
observer.observe(body, { attributeFilter: ['data-query'] });
