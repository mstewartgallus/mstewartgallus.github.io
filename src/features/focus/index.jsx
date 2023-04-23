import { createContext, useRef, useContext, useDeferredValue, useEffect } from "react";
import { Context } from "./focus.jsx";
export { FocusProvider } from "./focus.jsx";

// Gatsby already handles scroll
const opts = { preventScroll: true };

export const useFocus = () => {
    const ref = useRef();
    const { pathname, hash, changed } = useContext(Context);
    useEffect(() => {
        if (!changed) {
            return;
        }
        if (hash) {
            return;
        }

        const { current } = ref;
        if (!current) {
            return;
        }

        current.focus(opts);
    },  [hash, pathname, changed]);
    return ref;
};
