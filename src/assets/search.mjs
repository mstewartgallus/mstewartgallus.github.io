import './h1.mjs';
import './results.mjs';

history.scrollRestoration = 'manual';

const { origin, pathname, searchParams } = new URL(location);

function target() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.focus({ preventScroll: true });
}

const doctitle = document.title;

function submitRequest(event) {
    const { submitter, target: form } = event;

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

function setURLSubmit(event) {
    const r = submitRequest(event);
    if (!r) {
        return;
    }

    event.preventDefault();

    let url = r.url;

    const { hash, searchParams } = new URL(url);

    const query = searchParams.get('s') ?? '';
    const title = query !== '' ? `${query}\u2009—\u2009${doctitle}` : '';

    document.title = title;

    // FIXME detect replace request
    // dedup as a temporary hack
    if (url === window.location.toString()) {
        history.replaceState(null, '', url);
    } else {
        history.pushState(null, '', url);
    }
    target();
}

function setInput(event) {
    const { searchParams } = new URL(location);
    const query = searchParams.get('s') ?? '';

    const input = document.getElementById('search-input');
    if (!input) {
        return;
    }

    input.value = query;
}

function setTag(event) {
    const { searchParams } = new URL(location);
    const tag = new Set(searchParams.getAll('tag'));

    const tagEl = document.getElementById('tag');
    if (!tagEl) {
        return;
    }

    for (const option of tagEl.elements) {
        option.checked = tag.has(option.value);
    }
}

function setCategory(event) {
    const { searchParams } = new URL(location);
    const category = new Set(searchParams.getAll('category'));

    const categoryEl = document.getElementById('category');
    if (!categoryEl) {
        return;
    }

    for (const option of categoryEl.elements) {
        option.checked = category.has(option.value);
    }
}

document.addEventListener('submit', setURLSubmit);

window.addEventListener('popstate', setInput);
window.addEventListener('popstate', setCategory);
window.addEventListener('popstate', setTag);

window.addEventListener('popstate', () => {
    document.getElementById('search')
        .requestSubmit();
});


switch (document.readyState) {
case 'interactive':
case 'complete':
    break;

default:
    await new Promise(r => {
        window.addEventListener('DOMContentLoaded', r);
    });
    break;
}

window.dispatchEvent(new PopStateEvent('popstate'));
