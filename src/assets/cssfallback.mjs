const headers = {
    'Accept': 'text/css'
};

const options = { mode: 'cors', headers };

export default async function css(url) {
    const sheet = new CSSStyleSheet();

    const r = await fetch(url, options);
    if (!r.ok) {
        throw r;
    }
    const t = await r.text();
    await sheet.replace(t);
    return sheet;
}
