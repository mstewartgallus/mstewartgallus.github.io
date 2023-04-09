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

const useNavigate = () => useEffect(() => {
    if (!window.navigation || !document.startViewTransition) {
        return;
    }
    window.navigation.addEventListener('navigate', onNavigate);
    return () => window.navigation.removeEventListener('navigate', onNavigate);
}, []);

const useNavigateSuccess = () => useEffect(() => {
    if (!window.navigation || !document.startViewTransition) {
        return;
    }
    window.navigation.addEventListener('navigatesuccess', onNavigateSuccess);
    return () => window.navigation.removeEventListener('navigatesuccess', onNavigateSuccess);
}, []);

const useNavigateError = () => useEffect(() => {
    if (!window.navigation || !document.startViewTransition) {
        return;
    }
    window.navigation.addEventListener('navigateerror', onNavigateError);
    return () => window.navigation.removeEventListener('navigateerror', onNavigateError);
}, []);

const useViewTransition = () => {
    useNavigate();
    useNavigateSuccess();
    useNavigateError();
};

const ViewTransition = ({children}) => {
    useViewTransition();
    return children;
};

export const wrapPageElement = ({element}) => <ViewTransition>{element}</ViewTransition>;

export const onRouteUpdate = (...x) => resolveRouteUpdate(...x);
export const onRouteUpdateDelayed = (...x) => resolveRouteUpdateDelayed(...x);
