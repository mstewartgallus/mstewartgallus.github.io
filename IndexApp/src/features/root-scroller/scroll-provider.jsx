import { useCallback, useRef, useEffect, useReducer, useTransition } from "react";
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

const initialState = {};

const reducer = (state, action) => {
    const { pathname, scrollLeft, scrollTop } = action;
    return { ...state, [pathname]: { scrollLeft, scrollTop }};
};

export const ScrollProvider = ({children, pathname}) => {
    const [, startTransition] = useTransition();
    const [scrolls, dispatch] = useReducer(reducer, initialState);

    const throttle = useThrottle();
    const onScroll = useCallback(e => {
        const { target } = e;
        throttle(100, () => {
            const { scrollLeft, scrollTop } = target;
            startTransition(() => dispatch({pathname, scrollLeft, scrollTop}));
        });
    }, [throttle, pathname]);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        return () => window.history.scrollRestoration = 'auto';
    }, []);

    const { scrollLeft, scrollTop } = scrolls?.[pathname] ?? { scrollLeft: 0, scrollTop: 0 };

    return <Provider value={{ scrollLeft, scrollTop, onScroll }}>
               {children}
           </Provider>;
};
