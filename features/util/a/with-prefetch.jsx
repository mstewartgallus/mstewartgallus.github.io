import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { componentName } from "../component-name.js";

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

const usePrefetch = (ref, href) => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, [myref]);

    useEffect(() => {
        const pre = getPrefetcher();
        if (!pre) {
            return;
        }

        const { current } = myref;
        if (!current) {
            return;
        }

        const abort = { current: false };
        const r = { current: null };
        const callback = n => {
            if (abort.current) {
                return;
            }

            if (n) {
                if (!r.current) {
                    // r.current = prefetchPathname(href);
                }
            } else {
                r.current?.abort();
                r.current = null;
            }
        };

        callbacks.set(current, callback);
        pre.observe(current);
        return () => {
            abort.current = true;
            r.current?.abort();
            r.current = null;
            pre.unobserve(current);
            callbacks.delete(callback);
        };
    }, [href]);

    return myref;
};

export const withPrefetch = Component => {
    const WithPrefetch = forwardRef((props, ref) => {
        const { href } = props;

        const myref = usePrefetch(ref, href);

        return <Component {...props} ref={myref} />;
    });
    WithPrefetch.displayName = `Prefetch(${componentName(Component)})`;
    return WithPrefetch;
};
