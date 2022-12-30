import html from './html.mjs';

const h1 = await html('./h1.html', import.meta.url);

export default class SearchH1 extends HTMLElement {
    static formAssociated = true;
    static observedAttributes = ['query'];

    #query;
    #abort;

    #shadow;
    #internals;

    constructor() {
        super();

        this.#shadow = this.attachShadow({mode: 'closed'});
        this.#internals = this.attachInternals();

        this.#shadow.replaceChildren(h1.cloneNode(true));
        this.#query = this.#shadow.getElementById('query');

        this.#internals.ariaLive = 'polite';
    }

    connectedCallback() {
        for (const prop of SearchH1.observedAttributes) {
            if (!this.hasOwnProperty(prop)) {
                continue;
            }
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }

    formAssociatedCallback(form) {
        if (!form) {
            this.#abort.abort();
            return;
        }
        const abort = new AbortController();
        this.#abort = abort;

        form.addEventListener('submit', e => this.#submit(e), { signal: abort.signal });
    }

    #submit(e) {
        const s = this.query;
        if (!s) {
            return;
        }

        const data = new FormData(e.target);

        const query = data.get(s) ?? '';

        this.#query.textContent = query !== '' ? `${query}\u2009—\u2009` : '';
    }

    get query() {
        return this.getAttribute('query');
    }
    set query(x) {
        this.setAttribute('query', x);
    }
}

customElements.define("search-h1", SearchH1);
