import { useRef, useEffect } from "react";

const idle = cb => {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(cb, { timeout: 500 });
    } else {
        window.setTImeout(cb, 0);
    }
};

const onHover = (url, e) => {
    idle(() => window.___loader.hovering(url));
};

export const useHover = url => {
    const ref = useRef();
    useEffect(() => {
        const { current } = ref;
        if (!current) {
            return;
        }

        // FIXME shouldn't bypass stuff
        const abort = new AbortController();
        const { signal } = abort;
        current.addEventListener('mouseover',
                                 e => onHover(url, e),
                                 { passive: true, signal });
        return () => abort.abort();
    }, [url]);
    return ref;
};
