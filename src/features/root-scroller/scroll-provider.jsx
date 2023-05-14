import { useCallback, useRef, useState, useTransition } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

const useThrottle = () => {
    const dirty = useRef(false);
    return useCallback((ival, cb) => {
        if (dirty.current) {
            return;
        }
        dirty.current = true;

        setTimeout(() => {
            cb();
            dirty.current = false;
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

    return <Provider value={{ scrollLeft, scrollTop, onScroll }}>
               {children}
           </Provider>;
};
