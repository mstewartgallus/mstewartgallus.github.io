import { useEffect } from "react";

let resolveRouteUpdate = () => {};
let resolveRouteUpdateDelayed = () => {};

const onNavigate = e => {
    const { hashChange, canIntercept, downloadRequest } = e;

    if (!canIntercept || downloadRequest || hashChange) {
        return;
    }

    const routeUpdate = new Promise(r => resolveRouteUpdate = r);
    const routeUpdateDelayed = new Promise(r => resolveRouteUpdateDelayed = r);

    // FIXME update focus AFTER transition
    document.startViewTransition(async () => {
        await Promise.race([routeUpdateDelayed, routeUpdate]);
    });
};


const Nav = ({children}) => {
    useEffect(() => {
        if (!window.navigation || !document.startViewTransition) {
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
export const onRouteUpdateDelayed = (...x) => resolveRouteUpdateDelayed(...x);
