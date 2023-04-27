import { useEffect, useState, useTransition } from "react";

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
    const [,startTransition] = useTransition();
    const [near, setNear] = useState(false);
    useEffect(() => {
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
            startTransition(() => setNear(n));
        };

        signal.addEventListener('abort', () => {
            pre.unobserve(current);
            callbacks.delete(callback);
        }, { passive: true });

        callbacks.set(current, callback);
        pre.observe(current);
        return () => abort.abort();
    }, [ref]);
    return near;
};
