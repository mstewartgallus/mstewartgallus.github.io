import { useEffect } from "react";

const ENABLE_NAVIGATION = false;

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

    const routeUpdate = new Promise(r => resolveRouteUpdate = r);
    e.intercept({
        focusReset: 'manual',
        scroll: 'manual',

        async handler() {
            await routeUpdate;
        }
    });
};

export const navigationEnabled = () => window.navigation && ENABLE_NAVIGATION;

const Nav = ({children}) => {
    useEffect(() => {
        if (!navigationEnabled()) {
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
    }, []);
    return children;
};

export const wrapPageElement = ({element}) => <Nav>{element}</Nav>;
export const onRouteUpdate = (...x) => resolveRouteUpdate(...x);
