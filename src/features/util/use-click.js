import { useCallback } from "react";
import { navigate } from "gatsby";

const bubble = e => {
    while (e && (e.tagName !== 'A' || !e.href)) {
        e = e.parentElement;
    }
    return e;
};

export const useClick = () => {
    return useCallback(async e => {
        // FIXME check if not my url
        const { defaultPrevented, target, altKey, metaKey, shiftKey, ctrlKey, button } = e;
        if (defaultPrevented) {
            return;
        }
        if (button !== 0) {
            return;
        }

        if (altKey || metaKey || shiftKey || ctrlKey) {
            return;
        }

        const { href } = bubble(target);
        const { hash, pathname, search } = new URL(href, window.location);

        if (hash) {
            return;
        }

        e.preventDefault();

        const url = pathname + search;

        await navigate(url);
    }, []);
};
