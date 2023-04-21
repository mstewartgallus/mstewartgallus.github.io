import { createContext, useRef, useContext, useDeferredValue, useEffect } from "react";
import { useChanged } from "@features/util";
import { usePostLocation } from "@features/post-location";

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

const Context = createContext();
Context.displayName = 'Focus';

const { Provider } = Context;

const useFocusState = () => {
    const location = usePostLocation();
    const deferred = useDeferredValue(location);
    const { pathname, hash } = deferred;
    const changed = useChanged(pathname);
    return { hash, pathname, changed };
};

export const FocusProvider = ({children}) => {
    const state = useFocusState();
    return <Provider value={state}>{children}</Provider>;
};

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
