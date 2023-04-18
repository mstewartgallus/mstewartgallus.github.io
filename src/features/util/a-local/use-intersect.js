// Only prefetch mostly visible links
const options = {
    threshold: 1
};

const onNears = new Map();
const onFars = new Map();

const onObserve = ({ target, isIntersecting, intersectionRatio }) => {
    if (isIntersecting || intersectionRatio > 0) {
        const cb = onNears.get(target);
        cb?.();
    } else {
        const cb = onFars.get(target);
        cb?.();
    }
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

export const onNearFar = (
    elem,
    onNear,
    onFar,
    { signal }
) => {
    const pre = getPrefetcher();
    if (!pre) {
        return;
    }

    let ignore = false;
    const onNearWrap = () => {
        if (ignore) {
            return;
        }
        onNear();
    };
    const onFarWrap = () => {
        if (ignore) {
            return;
        }
        onFar();
    };

    signal.addEventListener('abort', () => {
        ignore = true;
        pre.unobserve(elem);
        onNears.delete(elem);
        onFars.delete(elem);
    }, { passive: true });

    onNears.set(elem, onNearWrap);
    onFars.set(elem, onFarWrap);
    pre.observe(elem);
};
