const headers = {
    'Content-Type': 'text/css'
};

const options = { mode: 'cors', headers };

const csss = new Map();

export default async function css(url, base) {
    url = new URL(url, base).href;

    let promise = csss.get(url);
    if (promise) {
        return await promise;
    }

    const sheet = new CSSStyleSheet();

    promise = (async () => {
        const r = await fetch(url, options);
        if (!r.ok) {
            throw r;
        }
        const t = await r.text();
        await sheet.replace(t);
        return sheet;
    })();
    csss.set(url, promise);
    return await promise;
}
