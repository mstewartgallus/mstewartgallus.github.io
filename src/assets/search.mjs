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

class SearchCustomEvent extends CustomEvent {
}

class SearchBodyElement extends HTMLBodyElement {
    constructor() {
        super();
        this.addEventListener('click', e => this.#clickCallback(e));
        this.addEventListener('submit', e => this.#submitCallback(e));
        this.addEventListener('popstate', e => this.#popstateCallback(e));
    }

    #searchCallback(query) {
        const event = new SearchCustomEvent('search-custom',
                                            { detail: query });
        setTimeout(() => {
            this.ownerDocument.dispatchEvent(event);

            const h1 = this.ownerDocument.getElementsByTagName('h1')[0];
            if (h1) {
                h1.setAttribute('tabindex', '-1');
                h1.focus();
            }
        }, 0);
    }

    #requestCallback(request) {
        const location = new URL(request.url);
        switch (true) {
        case (location.pathname === '/search/'
              && request.method === 'GET'): {
                  const query = location.searchParams.get('s');
                  this.#searchCallback(query);

                  return new Response('', { status: 200, statusText: 'OK' });
              }
        }
        return new Response('', { status: 404, statusText: 'Not Found' });
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
        const response = this.#requestCallback(request);
        if (response.ok) {
            this.ownerDocument.defaultView.history.pushState(null, '', request.url);
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
        const response = this.#requestCallback(request);
        if (response.ok) {
            this.ownerDocument.defaultView.history.pushState(null, '', request.url);
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
}
customElements.define("search-body", SearchBodyElement,
                      { 'extends': 'body' });

function getQuery(el) {
    return new URL(el.ownerDocument.location).searchParams.get('s');
}

class SearchTitleElement extends HTMLTitleElement {
    #title;

    constructor() {
        super();
        this.#title = this.text;
    }

    // FIXME remove on disconnectedCallback ?
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        this.ownerDocument.addEventListener('search-custom', e => {
            this.#searchCallback(e.detail);
        });
        this.#searchCallback(getQuery(this));
    }

    #searchCallback(query) {
        this.text =
            query ?
            `${query} — ${this.#title}` :
            doctitle;
    }
}
customElements.define("search-title", SearchTitleElement,
                      { 'extends': 'title' });

DOMContentLoaded.then(() => {
    const template = document.getElementById('search-h1').content;

    class SearchH1Element extends HTMLHeadingElement {
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

        connectedCallback() {
            if (!this.isConnected) {
                return;
            }
            this.ownerDocument.addEventListener('search-custom', e => {
                this.#searchCallback(e.detail);
            });
            this.#searchCallback(getQuery(this));
        }

        #searchCallback(query) {
            this.#query.textContent = query ? `${query} - ` : '';
        }
    }
    customElements.define("search-h1", SearchH1Element,
                          { 'extends': 'h1' });
});


DOMContentLoaded.then(() => {
    const template = document.getElementById('search-article').content;

    class SearchArticleElement extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({
                mode: 'closed',
                delegatesFocus: true
            }).append(template.cloneNode(true));
        }
    }
    customElements.define("search-article", SearchArticleElement,
                          { 'extends': 'article' });
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

    class SearchOutputElement extends HTMLOutputElement {
        #list;

        constructor() {
            super();

            const doc = this.ownerDocument;
            const list = doc.createElement('ul');

            this.appendChild(list);
            this.#list = list;
        }

        connectedCallback() {
            if (!this.isConnected) {
                return;
            }
            this.ownerDocument.addEventListener('search-custom', e => {
                this.#searchCallback(e.detail);
            });
            this.#searchCallback(getQuery(this));
        }

        #searchCallback(query) {
            const doc = this.ownerDocument;
            const posts = fuse
                  .search(query ?? '')
                  .map(post => renderPost(doc, post.item));

            this.#list.replaceChildren(...posts);
            this.removeAttribute('hidden');

        }
    }
    customElements.define("search-output", SearchOutputElement,
                          { 'extends': 'output' });
})();

class SearchInputElement extends HTMLInputElement {
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        this.ownerDocument.addEventListener('search-custom', e => {
            this.#searchCallback(e.detail);
        });
        this.#searchCallback(getQuery(this));
    }

    #searchCallback(query) {
        this.value = query ?? '';
    }
}
customElements.define("search-input", SearchInputElement,
                      { 'extends': 'input' });
