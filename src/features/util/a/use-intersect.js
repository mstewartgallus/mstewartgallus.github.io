import { useDeferredValue, useSyncExternalStore, useRef } from "react";

// Only prefetch mostly visible links
const options = {
    threshold: 1
};

const callbacks = new Map();

const onObserve = ({ target, isIntersecting, intersectionRatio }) => {
    const cb = callbacks.get(target);
    cb?.(isIntersecting || intersectionRatio > 0);
};

const observer = entries => {
    for (const entry of entries) {
        onObserve(entry);
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

    prefetcher = new IntersectionObserver(observer, options);
    return prefetcher;
};

export const useNear = ref => {
    const nearRef = useRef(false);
    const near = useSyncExternalStore(cb => {
        const pre = getPrefetcher();
        if (!pre) {
            return;
        }

        const { current } = ref;
        if (!current) {
            return;
        }

        const abort = new AbortController();
        const { signal } = abort;

        const callback = n => {
            if (signal.aborted) {
                return;
            }
            nearRef.current = n;
            cb();
        };

        signal.addEventListener('abort', () => {
            pre.unobserve(current);
            callbacks.delete(callback);
        }, { passive: true });

        callbacks.set(current, callback);
        pre.observe(current);
        return () => abort.abort();
    }, () => nearRef.current, () => nearRef.current);
    return useDeferredValue(near);
};
