import { useSyncExternalStore, useEffect } from "react";
import { useLocation } from "@gatsbyjs/reach-router";

let prevLocation = null;
const callbacks = new Set();
const usePrevLocation = () => useSyncExternalStore(cb => {
    let ignore = false;
    const callback = () => {
        if (ignore) {
            return;
        }
        cb();
    };
    callbacks.add(callback);
    return () => {
        ignore = true;
        callbacks.delete(callback);
    };
}, () => prevLocation, () => prevLocation);

let focus = null;

export const focusRef = elem => {
    focus = elem;
};

// hack around the Gatsby focus wrapper for manual focus management
export const onClientEntry = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

export const Focus = () => {
    const { hash, pathname } = useLocation();
    const prevLocation = usePrevLocation();
    const prevPathname = prevLocation?.pathname;

    useEffect(() => {
        if (!prevPathname) {
            return;
        }

        if (hash) {
            const elem = document.getElementById(hash.slice(1));
            elem?.focus(opts);
            return;
        }

        if (prevPathname === pathname) {
            return;
        }

        const current = focus;
        if (!current) {
            return;
        }

        current.focus(opts);
    }, [prevPathname, pathname, hash]);
    return null;
};

export const onRouteUpdate = ({prevLocation: newPrev}) => {
    prevLocation = newPrev;
    for (const cb of callbacks) {
        cb();
    }
};
