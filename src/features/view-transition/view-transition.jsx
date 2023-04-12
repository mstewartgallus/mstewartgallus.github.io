import { useEffect } from "react";
import { routeUpdate, routeUpdateDelayed } from "./listeners.js";

const onNavigate = e => {
    const { hashChange, canIntercept, downloadRequest } = e;

    if (!canIntercept || downloadRequest || hashChange) {
        return;
    }

    const routeUpdatePs = routeUpdate();
    const routeUpdateDelayedPs = routeUpdateDelayed();
    // FIXME update focus AFTER transition
    document.startViewTransition(() => Promise.race([
        routeUpdateDelayedPs,
        routeUpdatePs
    ]));
};

export const ViewTransition = () => {
    useEffect(() => {
        if (!window.navigation || !document.startViewTransition) {
            return;
        }
        const abort = new AbortController();
        const { signal } = abort;
        const options = { passive: true, signal };
        window.navigation.addEventListener('navigate', onNavigate, options);
        return () => abort.abort();
    }, []);
    return null;
};

export default ViewTransition;
