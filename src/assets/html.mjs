const headers = {
    'Accept': 'text/html'
};

const options = { mode: 'cors', headers };

export default async function html(url) {
    const req = new XMLHttpRequest();
    const promise = new Promise(r => {
        req.addEventListener("load", () => {
            r(req.responseXML);
        });
    });
    req.open("GET", url);
    req.responseType = "document";
    req.send();
    return await promise;
}
