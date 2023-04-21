import { useEffect } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import { routeUpdate, routeUpdateDelayed } from "./listeners.js";

const onNavigate = (pathname, { signal }) => e => {
    const { destination, canIntercept, downloadRequest } = e;

    if (!canIntercept || downloadRequest) {
        return;
    }

    if (new URL(destination.url).pathname === pathname) {
        return;
    }

    const routeUpdatePs = routeUpdate({ signal });
    const routeUpdateDelayedPs = routeUpdateDelayed({ signal });
    // FIXME update focus AFTER transition
    document.startViewTransition(() => Promise.race([
        routeUpdateDelayedPs,
        routeUpdatePs
    ]));
};

export const ViewTransition = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (!window.navigation || !document.startViewTransition) {
            return;
        }
        const abort = new AbortController();
        const { signal } = abort;
        const options = { passive: true, signal };
        window.navigation.addEventListener('navigate', onNavigate(pathname, { signal }), options);
        return () => abort.abort();
    }, [pathname]);
    return null;
};
