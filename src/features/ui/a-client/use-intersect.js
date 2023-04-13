const callbacks = new Map();

const onObserve = entry => {
    const { target, isIntersecting, intersectionRatio } = entry;

    const near = isIntersecting || intersectionRatio > 0;
    callbacks.get(target)(near);
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

    prefetcher = new IntersectionObserver(entries => {
        for (const entry of entries) {
            onObserve(entry);
        }
    });
    return prefetcher;
};

export const observe = (elem, cb, { signal }) => {
    const pre = getPrefetcher();
    if (!pre) {
        return;
    }

    let ignore = false;
    const callback = near => {
        if (ignore) {
            return;
        }
        cb(near);
    };

    signal.addEventListener('abort', () => {
        ignore = true;
        pre.unobserve(elem);
        callbacks.delete(elem);
    }, { passive: true });

    callbacks.set(elem, callback);
    pre.observe(elem);
};