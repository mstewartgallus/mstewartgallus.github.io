const headers = {
    'Accept': 'text/html'
};

const options = { mode: 'cors', headers };

const htmls = new Map();

export default async function html(url) {
    let promise = htmls.get(url);
    if (promise) {
        return await promise;
    }

    const req = new XMLHttpRequest();
    promise = new Promise(r => {
        req.addEventListener("load", () => {
            r(req.responseXML);
        });
    });
    req.open("GET", url);
    req.responseType = "document";
    req.send();

    // const template = document.createElement('template');

    // promise = (async () => {
    //     const r = await fetch(url, options);
    //     if (!r.ok) {
    //         throw r;
    //     }
    //     const t = await r.text();
    //     template.innerHTML = t;
    //     return template.content;
    // })();
    htmls.set(url, promise);
    return await promise;
}
