import { useEffect } from "react";

const INTERCEPT = false;

let resolveRouteUpdate = () => {};

const onNavigate = e => {
    const { hashChange, userInitiated, canIntercept, downloadRequest, formData } = e;

    if (!canIntercept) {
        return;
    }

    if (!userInitiated) {
        return;
    }

    if (downloadRequest) {
        return;
    }

    if (formData) {
        return;
    }

    if (hashChange) {
        return;
    }

    const { pathname, search } = new URL(e.destination.url);
    const url = pathname + search;

    const pageResourcesPs = window.___loader.loadPage(url);

    const routeUpdate = new Promise(r => resolveRouteUpdate = r);
    e.intercept({
        focusReset: 'manual',
        scroll: 'manual',

        async handler() {
            await pageResourcesPs;
            await routeUpdate;
        }
    });
};

export const interceptEnabled = () => INTERCEPT && window.navigation;

const intercept = () => {
    if (!interceptEnabled()) {
        return;
    }
    let ignore = false;
    const cb = e => {
        if (ignore) {
            return;
        }
        return onNavigate(e);
    };
    window.navigation.addEventListener('navigate', cb);
    return () => {
        ignore = true;
        window.navigation.removeEventListener('navigate', cb);
    };
};

const useIntercept = () => useEffect(intercept, []);

const Intercept = ({children}) => {
    useIntercept();
    return children;
};

export const wrapPageElement = ({element}) => <Intercept>{element}</Intercept>;
export const onRouteUpdate = (...x) => resolveRouteUpdate(...x);
