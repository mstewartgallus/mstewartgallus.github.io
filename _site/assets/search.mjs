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

const DOMContentLoaded = (async () => {
    await new Promise(r => {
        window.addEventListener('DOMContentLoaded', r);
        switch (document.readyState) {
        case 'interactive':
        case 'complete':
            r();
            break;
        }
    });
})();

customElements.define("search-title", class extends HTMLTitleElement {
    #title;

    constructor() {
        super();
        this.#title = this.text;
    }

    #update(query) {
        this.text =
            query ?
            `${query} — ${this.#title}` :
            this.#title;
    }

    static get observedAttributes() { return ['data-query']; }

    attributeChangedCallback(name, old, val) {
        this.#update(val);
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        this.#update(this.dataset.query);
    }
}, { 'extends': 'title' });

DOMContentLoaded.then(() => {
    const template = document.getElementById('search-h1').content;

    customElements.define("search-h1", class extends HTMLHeadingElement {
        #query;

        constructor() {
            super();

            const shadow = this
                  .attachShadow({
                      mode: 'closed',
                      delegatesFocus: false
                  });
            shadow.append(template.cloneNode(true));
            this.#query = shadow.getElementById('query');
        }

        #update() {
            const query = this.dataset.query;
            this.#query.textContent = query ? `${query} - ` : '';
        }

        static get observedAttributes() { return ['data-query']; }

        attributeChangedCallback(name, old, val) {
            this.#update();
        }

        connectedCallback() {
            if (!this.isConnected) {
                return;
            }
            this.#update();
        }
    }, { 'extends': 'h1' });
});


DOMContentLoaded.then(() => {
    const template = document.getElementById('search-article').content;

    customElements.define("search-article", class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({
                mode: 'closed',
                delegatesFocus: true
            }).append(template.cloneNode(true));
        }
    }, { 'extends': 'article' });
});

function renderPost(doc, post) {
    const title = doc.createElement("a");
    title.setAttribute('slot', 'title');
    title.href = post.url;
    title.textContent = post.title;

    const date = doc.createElement("time");
    date.setAttribute('slot', 'date');
    date.textContent = post.date;

    const cats = post.categories.map(category => {
        const params = new URLSearchParams({'s': category});
        const anchor = doc.createElement("a");
        anchor.setAttribute('slot', 'category');
        anchor.textContent = category;
        anchor.href = `?${params}`;
        return anchor;
    });

    const tags = post.tags.map(tag => {
        const params = new URLSearchParams({'s': tag});
        const anchor = doc.createElement("a");
        anchor.setAttribute('slot', 'tag');
        anchor.textContent = `#${tag}`;
        anchor.href = `?${params}`;
        return anchor;
    });

    const article = doc.createElement("article", { 'is': 'search-article' });
    article.append(title, date, ...cats, ...tags);

    const li = doc.createElement("li");
    li.appendChild(article);
    return li;
}

(async () => {
    await DOMContentLoaded;
    const fuse = await database;

    customElements.define("search-output", class extends HTMLOutputElement {
        #list;

        constructor() {
            super();

            const doc = this.ownerDocument;
            const list = doc.createElement('ul');

            this.appendChild(list);
            this.#list = list;
        }

        #update(query) {
            const doc = this.ownerDocument;
            const posts = fuse
                  .search(query ?? '')
                  .map(post => renderPost(doc, post.item));

            this.#list.replaceChildren(...posts);
            this.removeAttribute('hidden');
        }

        static get observedAttributes() { return ['data-query']; }

        attributeChangedCallback(name, old, val) {
            this.#update(val);
        }

        connectedCallback() {
            if (!this.isConnected) {
                return;
            }
            this.#update(this.dataset.query);
        }
    }, { 'extends': 'output' });
})();

class SearchCustomEvent extends CustomEvent {
}

customElements.define("search-body", class extends HTMLBodyElement {
    constructor() {
        super();
        this.addEventListener('click', e => this.#clickCallback(e));
        this.addEventListener('submit', e => this.#submitCallback(e));
        this.addEventListener('popstate', e => this.#popstateCallback(e));
    }

    connectedCallback() {
        this.#requestCallback(new Request(this.ownerDocument.location));
    }

    #searchCallback(query) {
        const event = new SearchCustomEvent('search-custom',
                                            { detail: query });
        setTimeout(() => {
            this.dispatchEvent(event);
        }, 0);
    }

    #requestCallback(request) {
        const location = new URL(request.url);

        const route = {
            '/search/': {
                'GET': () => {
                    const query = location.searchParams.get('s');
                    this.#searchCallback(query);
                }
            }
        };
        const x = route[location.pathname];
        if (!x)
            return false;
        const y = x[request.method];
        if (!y)
            return false;
        y();
        return true;
    }

    #clickCallback(event) {
        const tag = event.target;
        if (tag.tagName != 'A') {
            return;
        }
        const href = tag.href;
        if (!href) {
            return;
        }
        if (event.button != 0) {
            return;
        }

        if (tag.origin != this.#origin()) {
            return;
        }

        const request = new Request(href);
        if (this.#requestCallback(request)) {
            this.ownerDocument.defaultView.history
                .pushState(null, '', request.url);
            event.preventDefault();
        }
    }

    #submitCallback(event) {
        const form = event.target;

        let url = new URL(form.action, this.#origin());
        if (url.origin != this.#origin()) {
            return;
        }

        const formdata = new FormData(form);
        const options = {
            method: form.method
        };
        if (form.method === 'get') {
            const params = new URLSearchParams(formdata);
            for (const [key, value] of url.searchParams) {
                params.append(key, value);
            }
            url = new URL(url.origin + url.pathname + "?" + params);
        } else {
            options.body = formdata;
        }
        const request = new Request(url, options);
        if (this.#requestCallback(request)) {
            this.ownerDocument.defaultView.history
                .pushState(null, '', request.url);
            event.preventDefault();
        }
    }

    #popstateCallback(event) {
        // FIXME get location from cb ?
        this.#requestCallback(new Request(this.ownerDocument.location));
    }

    #origin() {
        return this.ownerDocument.location.origin;
    }
}, { 'extends': 'body' });

function onsearch(e) {
    const query = e.detail;

    const title = document.getElementsByTagName('title')[0];

    const h1 = document.getElementById('title');

    const output = document.getElementById('search-output');
    const input = document.getElementById('search-input');

    if (title) {
        title.dataset.query = query;
    }

    if (h1) {
        h1.dataset.query = query;
    }

    if (output) {
        output.dataset.query = query;
    }

    if (input) {
        input.value = query;
    }

    if (h1) {
        h1.setAttribute('tabindex', '-1');
        h1.focus();
    }
}

DOMContentLoaded.then(() => {
    document.body.addEventListener('search-custom', onsearch);
});
