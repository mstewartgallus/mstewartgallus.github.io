const { searchParams } = new URL(import.meta.url);
const url = import.meta.resolve(searchParams.get('src'));

const req = new XMLHttpRequest();
const promise = new Promise(r => {
    req.addEventListener("load", () => {
        r(req.responseXML);
    });
});
req.open("GET", url);
req.responseType = "document";
req.send();

export default await promise;
