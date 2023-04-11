import { useRef, useEffect } from "react";

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
        current.addEventListener('mouseenter',
                                 () => window.___loader.hovering(url),
                                 { passive: true, signal });
        return () => abort.abort();
    }, [url]);
    return ref;
};
