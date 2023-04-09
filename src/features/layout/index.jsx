import { memo } from "react";
import { Layout } from "./layout";
import { useEffect } from "react";

let updateResolve = null;
let updateDelayedResolve = null;

const onNavigate = e => {
    const { navigationType, canIntercept, downloadRequest, formData } = e;
    if (!canIntercept) {
        return;
    }

    if (navigationType === 'replace') {
        return;
    }

    if (downloadRequest) {
        return;
    }

    if (formData) {
        return;
    }

    const { location } = window;
    const { pathname, search } = new URL(e.destination.url, location);
    if (pathname + search === location.pathname + location.search) {
        return;
    }

    const update = new Promise(r => updateResolve = r);
    const updateDelayed = new Promise(r => updateDelayedResolve = r);

    e.intercept({
        scroll: 'manual',
        focusReset: 'manual',

        async handler() {
            document?.startViewTransition(async () => {
                await Promise.race([update,
                                     updateDelayed]);
            });

            await update;
        }
    });
};

const TrapNavigation = ({children}) => {
    useEffect(() => {
        if (!window.navigation) {
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

const LayoutMemo = memo(Layout);

export const wrapPageElement = ({ element }) =>
<TrapNavigation>
    <LayoutMemo>{element}</LayoutMemo>
</TrapNavigation>;

export const onRouteUpdate = () => {
    updateResolve?.();
};

export const onRouteUpdateDelayed = () => {
    updateDelayedResolve?.();
};
