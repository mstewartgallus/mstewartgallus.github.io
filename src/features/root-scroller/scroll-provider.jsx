import { useCallback, useRef, useEffect, useState, useTransition } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

const useThrottle = () => {
    const dirty = useRef(null);
    return useCallback((ival, cb) => {
        if (dirty.current) {
            clearTimeout(dirty.current);
        }
        dirty.current = setTimeout(() => {
            dirty.current = null;
            cb();
        }, ival);
    }, []);
};

const initialState = {
    scrollLeft: 0,
    scrollTop: 0
};

export const ScrollProvider = ({children}) => {
    const [, startTransition] = useTransition();
    const [{ scrollLeft, scrollTop }, set] = useState(initialState);

    const throttle = useThrottle();
    const onScroll = useCallback(e => {
        const { target } = e;
        throttle(100, () => {
            const { scrollLeft, scrollTop } = target;
            startTransition(() => set({scrollLeft, scrollTop}));
        });
    }, [throttle]);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        return () => window.history.scrollRestoration = 'auto';
    }, []);

    return <Provider value={{ scrollLeft, scrollTop, onScroll }}>
               {children}
           </Provider>;
};
