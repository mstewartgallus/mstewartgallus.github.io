import { useEffect } from "react";

let resolveRouteUpdate = () => {};
let resolveRouteUpdateDelayed = () => {};
let resolveNavigationSuccess = () => {};
let resolveNavigationError = () => {};

const onNavigate = e => {
    const { hashChange, canIntercept, downloadRequest } = e;

    if (!canIntercept || downloadRequest || hashChange) {
        return;
    }

    const routeUpdate = new Promise(r => resolveRouteUpdate = r);
    const routeUpdateDelayed = new Promise(r => resolveRouteUpdateDelayed = r);
    const navigationSuccess = new Promise(r => resolveNavigationSuccess = r);
    const navigationError = new Promise(r => resolveNavigationError = r);

    // FIXME update focus AFTER transition
    document.startViewTransition(async () => {
        await Promise.race([
            routeUpdateDelayed,
            Promise.all([
                routeUpdate,
                (async () => {
                    const { type, message } = await Promise.any([navigationSuccess, navigationError]);
                    if (type === 'navigateerror') {
                        throw String(message);
                    }
                })()
            ])
        ]);
    });
};

const onNavigateSuccess = e => {
    resolveNavigationSuccess(e);
};

const onNavigateError = e => {
    resolveNavigationError(e);
};

const useViewTransition = () => {
    useEffect(() => {
        if (!window.navigation || !document.startViewTransition) {
            return;
        }
        const abort = new AbortController();
        const { signal } = abort;
        const options = { passive: true, signal };
        window.navigation.addEventListener('navigate', onNavigate, options);
        window.navigation.addEventListener('navigateerror', onNavigateError, options);
        window.navigation.addEventListener('navigatesuccess', onNavigateSuccess, options);
        return () => abort.abort();
    });
};

const ViewTransition = () => {
    useViewTransition();
    return null;
};

export const wrapPageElement = ({element}) =>
<>
    <ViewTransition />
    {element}
</>;

export const onRouteUpdate = (...x) => resolveRouteUpdate(...x);
export const onRouteUpdateDelayed = (...x) => resolveRouteUpdateDelayed(...x);
