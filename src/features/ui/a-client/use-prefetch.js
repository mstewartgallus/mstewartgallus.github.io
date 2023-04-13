import { useRef, useEffect } from "react";
import { prefetchPathname } from "gatsby";

const aborts = new WeakMap();
const urls = new WeakMap();

// We need to use idle callbacks somewhwere because rather a lot of
// links can suddenly appear when opening and closing disclosures and
// accordions.  Otherwise we can lag animations here.

const idle = cb => {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(cb, { timeout: 500 });
    } else {
        window.setTImeout(cb, 0);
    }
};
const prefetch = elem => {
    const url = urls.get(elem);
    if (!url) {
        return;
    }
    const aborter = prefetchPathname(url);
    aborts.set(elem, aborter);
};

const abort = elem => {
    const aborter = aborts.get(elem);
    if (!aborter) {
        return;
    }

    aborts.delete(elem);
    aborter.abort();
};

const onObserve = entry => {
    const { target, isIntersecting, intersectionRatio } = entry;

    const near = isIntersecting || intersectionRatio > 0;
    if (near) {
        prefetch(target);
    } else {
        abort(target);
    }
};

let prefetcher = null;
const getPrefetcher = () => {
    if (prefetcher) {
        return prefetcher;
    }
    if (!window) {
        return null;
    }

    const { IntersectionObserver } = window;
    if (!IntersectionObserver) {
        return null;
    }

    prefetcher = new IntersectionObserver(entries => idle(() => {
        for (const entry of entries) {
            onObserve(entry);
        }
    }));
    return prefetcher;
};

const addPrefetch = (elem, url, { signal }) => {
    const pre = getPrefetcher();
    if (!pre) {
        return;
    }

    signal.addEventListener('abort', () => {
        pre.unobserve(elem);
        urls.delete(elem);
    }, { passive: true });
    urls.set(elem, url);
    pre.observe(elem);
};

// FIXME move wrapper elsewhere
export const usePrefetch = url => {
    const ref = useRef();
    useEffect(() => {
        const { current } = ref;
        if (!current) {
            return;
        }

        const abort = new AbortController();
        const { signal } = abort;
        addPrefetch(current, url, { signal });
        return () => abort.abort();
    }, [url]);
    return ref;
};
