import { useEffect } from "react";
import { navigate } from "gatsby";

const onNavigate = e => {
    const { hashChange, userInitiated, navigationType, canIntercept, downloadRequest, formData } = e;

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
    // For some reason 404 pages are displayed?
    e.preventDefault();

    document.startViewTransition(async () => {
        const { pathname, search } = new URL(e.destination.url);
        const replace = navigationType === 'replace';
        await navigate(pathname + search, { replace });
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
