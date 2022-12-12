---
---
import Fuse from './vend/fuse.mjs' ;

history.scrollRestoration = 'manual';

async function fetchjson(url) {
    return await ((await fetch(url)).json());
}

const index = fetchjson("{% link assets/index.json %}");
const search = fetchjson("{% link assets/search.json %}");

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

DOMContentLoaded.then(() => {
    const template = document.getElementById('search-h1').content;

    customElements.define("search-h1", class extends HTMLHeadingElement {
        static observedAttributes = ['data-query'];
        #query;

        constructor() {
            const clone = template.cloneNode(true);
            super();

            const shadow = this
                  .attachShadow({
                      mode: 'closed',
                      delegatesFocus: false
                  });
            shadow.append(clone);
            this.#query = shadow.getElementById('query');
        }

        attributeChangedCallback(n, o, x) {
            this.#query.textContent = x ? `${x} - ` : '';
        }
    }, { 'extends': 'h1' });
});


DOMContentLoaded.then(() => {
    const template = document.getElementById('search-article').content;

    customElements.define("search-article", class extends HTMLElement {
        constructor() {
            const clone = template.cloneNode(true);

            super();

            this.attachShadow({ mode: 'closed' }).append(clone);
        }
    }, { 'extends': 'article' });
});

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
    article.append(title, date,
                   ...cats, ...tags);

    const li = doc.createElement("li");
    li.append(article);
    return li;
}

(async () => {
    await DOMContentLoaded;
    const fuse = await database;

    customElements.define("search-output", class extends HTMLOutputElement {
        static observedAttributes = ['data-query'];
        #list;

        constructor() {
            super();

            const doc = this.ownerDocument;
            const list = doc.createElement('ul');

            this.append(list);
            this.#list = list;
        }

        attributeChangedCallback(n, o, x) {
            const doc = this.ownerDocument;
            const posts = fuse
                  .search(x ?? '')
                  .map(post => renderPost(doc, post.item));

            this.#list.replaceChildren(...posts);
            this.removeAttribute('hidden');
        }
    }, { 'extends': 'output' });
})();

customElements.define("search-body", class extends HTMLBodyElement {
    constructor() {
        super();
        this.addEventListener('click', e => this.#click(e));
        this.addEventListener('submit', e => this.#submit(e));
        this.addEventListener('popstate', e => this.#popstate(e));
    }

    connectedCallback() {
        this.#request(new Request(this.ownerDocument.URL));
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

    #click(event) {
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

        if (this.#request(new Request(href))) {
            this.ownerDocument.defaultView.history
                .pushState(null, '', href);
            event.preventDefault();
        }
    }

    #submit(event) {
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

function onsearch(query) {
    const title = document.getElementsByTagName('title')[0];
    const h1 = document.getElementById('title');
    const output = document.getElementById('search-output');
    const input = document.getElementById('search-input');

    title && (title.dataset.query = query);
    h1 && (h1.dataset.query = query);
    output && (output.dataset.query = query);
    input && (input.value = query);

    // FIXME a little awkward
    if (h1) {
        h1.tabIndex = -1;
        h1.focus();
    }
}

function onsearchdelay(query) {
    setTimeout(() => onsearch(query), 0);
}

function onmutation(mutationList, observer) {
    for (const mutation of mutationList) {
        onsearchdelay(mutation.target.dataset.query);
    }
}

const observer = new MutationObserver(onmutation);

DOMContentLoaded.then(() => {
    const body = document.body;
    onsearchdelay(body.dataset.query);
    observer.observe(body, { attributeFilter: ['data-query'] });
});
