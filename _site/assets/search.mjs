import Fuse from './vend/fuse.mjs' ;

class NavigateEvent extends CustomEvent {
    constructor(type, event) {
        super(type, event);
    }
}

class Queue {
    #events = [];
    #promise;
    #signal;

    constructor() {
        this.#promise = new Promise(r => {
            this.#signal = r;
        });
    }

    push(e) {
        this.#events.push(e);
        this.#signal();
    }

    async pop() {
        for (;;) {
            const e = this.#events.pop();
            if (e != null) {
                return e;
            }
            await this.#promise;
            this.#promise = new Promise(r => {
                this.#signal = r;
            });
        }
    }
}

class Lazy {
    #fn;
    #value;
    #init = false;

    constructor(f) {
        this.#fn = f;
    }

    async force() {
        if (this.#init) {
            return this.#value;
        }
        const value = await this.#fn();
        this.#value = value;
        this.#fn = null;
        this.#init = true;
        return value;
    }
}

const queue = new Queue();

document.addEventListener('click', e => queue.push(e));
document.addEventListener('submit', e => queue.push(e));
window.addEventListener('popstate', e => queue.push(e));

async function* events() {
    for (;;) {
        yield await queue.pop();
    }
}

async function* requests() {
    yield new Request(window.location);

    for await (const event of events()) {
        switch (event.type) {
        case 'popstate': {
            yield new Request(window.location);
            break;
        }

        case 'click': {
            const tag = event.target;
            if (tag.tagName != 'A') {
                continue;
            }
            const href = tag.href;
            if (!href) {
                continue;
            }
            if (event.button != 0) {
                continue;
            }

            if (tag.origin != document.location.origin) {
                continue;
            }

            const request = new Request(href);
            history.pushState(null, '', request.url);

            const response = yield request;
            if (response.ok) {
                event.preventDefault();
            }
            break;
        }

        case 'submit': {
            const form = event.target;

            let url = new URL(form.action, document.location.origin);
            if (url.origin != document.location.origin) {
                continue;
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
            history.pushState(null, '', request.url);

            const response = yield request;
            if (response.ok) {
                event.preventDefault();
            }
            break;
        }
        }
    }
}

const options = Object.freeze({
    ignoreLocation: true,
    keys: ['title', 'content', 'tags', 'categories', 'date']
});

async function fetchjson(str) {
    return await ((await fetch(str)).json());
}

const db = new Lazy(async () => {
    const [index, search] = await Promise.all([
        fetchjson("/assets/index.json"),
        fetchjson("/assets/search.json")
    ]);
    return new Fuse(search, options, Fuse.parseIndex(index));
});


function getQuery(doc) {
    return new URL(doc.location.href).searchParams.get('s');
}

export class SearchH1Element extends HTMLHeadingElement {
    #abort;
    #query;
    #slot;

    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: "closed",
            delegatesFocus: false
        });

        const doc = this.ownerDocument;
        this.#query = doc.createElement('span');
        this.#query.setAttribute('aria-live', 'polite');
        this.#slot = doc.createElement('slot');
        shadow.append(this.#query, this.#slot);
    }

    #update() {
        const doc = this.ownerDocument;

        const query = getQuery(doc);

        if (query) {
            this.#query.textContent = `${query} - `;
        } else {
            this.#query.textContent = '';
        }
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        const abort = new AbortController();
        this.#abort = abort;

        this.#update();

        this.ownerDocument.addEventListener('search-navigate', event => {
            this.#update();
        }, { 'passive': true, 'signal': abort.signal });
    }

    disconnectedCallback() {
        this.#abort.abort();
        this.#abort = null;
    }

    static {
        customElements.define("search-h1", SearchH1Element, { 'extends': 'h1' });
    }
}

export class SearchArticleElement extends HTMLElement {
    constructor() {
        super();

        const template = this.ownerDocument.getElementById('search-result');

        const shadow = this.attachShadow({
            mode: "closed",
            delegatesFocus: true
        });
        shadow.append(template.content.cloneNode(true));
    }

    static {
        customElements.define("search-article", SearchArticleElement, { 'extends': 'article' });
    }
}

// FIXME use shadow dom?
export class SearchOutputElement extends HTMLOutputElement {
    #abort;
    #list;

    constructor() {
        super();

        const doc = this.ownerDocument;
        const list = doc.createElement('ul');

        this.append(list);
        this.#list = list;
    }

    async #update() {
        const doc = this.ownerDocument;

        let query = getQuery(doc);
        if (!query) {
            query = '';
        }

        const posts = (await db.force()).search(query).map(p => p.item);

        const postList = posts.map(post => SearchOutputElement.#renderPost(doc, post));

        this.#list.replaceChildren(...postList);
        this.removeAttribute('hidden');

    }

    static #renderPost(doc, post) {
        const url = post.url;

        const catels = post.categories.map(category => {
            const params = new URLSearchParams();
            params.append("s", category);

            const anchor = doc.createElement("a");
            anchor.setAttribute('slot', 'category');
            anchor.textContent = category;
            anchor.href = "/search/?" + params;

            return anchor;
        });

        const tagels = post.tags.map(tag => {
            const params = new URLSearchParams();
            params.append("s", tag);

            const anchor = doc.createElement("a");
            anchor.setAttribute('slot', 'tag');
            anchor.textContent = "#" + tag;
            anchor.href = "/search/?" + params;

            return anchor;
        });

        const title = doc.createElement("a");
        title.setAttribute('slot', 'title');
        title.setAttribute('href', url);
        title.textContent = post.title;

        const date = doc.createElement("time");
        date.setAttribute('slot', 'date');
        date.textContent = post.date;

        const article = doc.createElement("article", { 'is': 'search-article' });
        article.append(title, date, ...catels, ...tagels);

        const li = doc.createElement("li");
        li.append(article);
        return li;
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        const abort = new AbortController();
        this.#abort = abort;

        this.#update();

        this.ownerDocument.addEventListener('search-navigate', async event => {
            await this.#update();
        }, { 'passive': true, 'signal': abort.signal });
    }

    disconnectedCallback() {
        this.#abort.abort();
        this.#abort = null;
    }

    static {
        customElements.define("search-output", SearchOutputElement, { 'extends': 'output' });
    }
}

export class SearchInputElement extends HTMLInputElement {
    #abort;

    constructor() {
        super();
    }

    #update() {
        const doc = this.ownerDocument;

        let query = getQuery(doc);
        if (!query) {
            query = '';
        }

        this.value = query;
    }

    connectedCallback() {
        if (!this.isConnected) {
            return;
        }

        const abort = new AbortController();
        this.#abort = abort;

        this.#update();

        this.ownerDocument.addEventListener('search-navigate', event => {
            this.#update();
        }, { 'passive': true, 'signal': abort.signal });
    }

    disconnectedCallback() {
        this.#abort.abort();
        this.#abort = null;
    }

    static {
        customElements.define("search-input", SearchInputElement, { 'extends': 'input' });
    }
}

history.scrollRestoration = 'manual';

const doctitle = document.title;
const h1s = document.getElementsByTagName('h1');

const loop = await requests();
let request = (await loop.next()).value;
let isfirst = true;
for (;;) {
    const location = new URL(request.url);
    let response;
    if (location.pathname === '/search/'
        && request.method === 'GET') {

        document.dispatchEvent(new NavigateEvent('search-navigate'));

        const query = getQuery(document);
        if (query) {
            document.title = `${query} — ${doctitle}`;
        } else {
            document.title = doctitle;
        }

        if (!isfirst) {
            const h1 = h1s[0];
            if (h1) {
                h1.setAttribute('tabindex', '-1');
                h1.focus();
            }
        }
        isfirst = false;

        response = new Response('', { status: 200, statusText: 'OK' });
    } else {
        response = new Response('', { status: 404, statusText: 'Not Found' });
    }

    request = (await loop.next(response)).value;
}
