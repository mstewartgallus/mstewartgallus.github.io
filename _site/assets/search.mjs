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

function getQuery(doc) {
    return new URL(doc.location.href).searchParams.get('s');
}


class NavigateEvent extends CustomEvent {
}

function navmixin(elem) {
    class NavigateMixinElement extends elem {
        #abort;

        navigateCallback() {
        }

        connectedCallback() {
            if (!this.isConnected) {
                return;
            }

            const abort = new AbortController();
            this.#abort = abort;

            this.navigateCallback();

            this.ownerDocument.addEventListener('search-navigate', event => {
                this.navigateCallback();
            }, { 'passive': true, 'signal': abort.signal });
        }

        disconnectedCallback() {
            this.#abort.abort();
            this.#abort = null;
        }
    }
    return NavigateMixinElement;
}

DOMContentLoaded.then(() => {
    const doctitle = document.title;

    class SearchTitleElement extends navmixin(HTMLTitleElement) {
        navigateCallback() {
            const query = getQuery(document);
            this.text =
                query ?
                `${query} — ${doctitle}` :
                doctitle;
        }
    }
    customElements.define("search-title",
                          SearchTitleElement,
                          { 'extends': 'title' });
});

DOMContentLoaded.then(() => {
    const template = document.getElementById('search-h1').content;

    class SearchH1Element extends navmixin(HTMLHeadingElement) {
        #query;
        #isfirst;

        constructor() {
            super();

            const shadow = this
                  .attachShadow({
                      mode: 'closed',
                      delegatesFocus: false
                  });
            shadow.append(template.cloneNode(true));
            this.#isfirst = true;
            this.#query = shadow.getElementById('query');
        }

        navigateCallback() {
            const query = getQuery(this.ownerDocument);
            this.#query.textContent = query ? `${query} - ` : '';

            if (!this.#isfirst) {
                this.#isfirst = false;
                return;
            }
            this.setAttribute('tabindex', '-1');
            this.focus();
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
    article.append(title, date,
                   ...cats,
                   ...tags);

    const li = doc.createElement("li");
    li.appendChild(article);
    return li;
}

(async () => {
    await DOMContentLoaded;
    const fuse = await database;

    class SearchOutputElement extends navmixin(HTMLOutputElement) {
        #list;

        constructor() {
            super();

            const doc = this.ownerDocument;
            const list = doc.createElement('ul');

            this.appendChild(list);
            this.#list = list;
        }

        navigateCallback() {
            const doc = this.ownerDocument;

            let query = getQuery(doc);
            if (!query) {
                query = '';
            }

            const posts = fuse
                  .search(query)
                  .map(post => renderPost(doc, post.item));

            this.#list.replaceChildren(...posts);
            this.removeAttribute('hidden');

        }
    }
    customElements.define("search-output", SearchOutputElement,
                          { 'extends': 'output' });
})();

class SearchInputElement extends navmixin(HTMLInputElement) {
    navigateCallback() {
        this.value = getQuery(this.ownerDocument) ?? '';
    }

    static {
        customElements.define("search-input",
                              SearchInputElement,
                              { 'extends': 'input' });
    }
}


function *router() {
    let request = yield;
    for (;;) {
        const location = new URL(request.url);
        let response;
        if (location.pathname === '/search/'
            && request.method === 'GET') {

            setTimeout(() => {
                document.dispatchEvent(new NavigateEvent('search-navigate'));
            }, 0);

            request = yield new Response('', { status: 200, statusText: 'OK' });
        } else {
            request = yield new Response('', { status: 404, statusText: 'Not Found' });
        }
    }
}

async function* requests(events) {
    yield new Request(window.location);

    for await (const event of events) {
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
            const response = yield request;
            if (response.ok) {
                history.pushState(null, '', request.url);
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
            const response = yield request;
            if (response.ok) {
                history.pushState(null, '', request.url);
                event.preventDefault();
            }
            break;
        }
        }
    }
}

let handler;

function push(e) {
    handler(e);
}

const popevents = (async function* () {
    for (;;) {
        yield await new Promise(r => {
            handler = r;
        });
    }
})();

document.addEventListener('click', push);
document.addEventListener('submit', push);
window.addEventListener('popstate', push);

const routerLoop = router();

const loop = await requests(popevents);
let request = (await loop.next()).value;
for (;;) {
    const response = routerLoop.next(request).value;
    request = (await loop.next(response)).value;
}
