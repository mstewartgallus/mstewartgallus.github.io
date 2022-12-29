import html from './html.mjs';

const h1 = await html('./h1.html', import.meta.url);

export default class SearchH1 extends HTMLElement {
    static formAssociated = true;

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
    }

    formAssociatedCallback(form) {
        if (!form) {
            this.#abort.abort();
            return;
        }
        const abort = new AbortController();
        this.#abort = abort;

        form.addEventListener('submit', () => this.#update(), { signal: abort.signal });
    }

    #update() {
        if (!this.#query) {
            return;
        }

        const data = new FormData(this.#internals.form);

        const query = data.get('s') ?? '';

        this.#query.textContent = query !== '' ? `${query}\u2009—\u2009` : '';
    }
}

customElements.define("search-h1", SearchH1);
