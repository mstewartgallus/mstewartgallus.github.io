import { useContext, useCallback, useRef } from "react";
import { useLocation } from "@features/location";
import { Context } from "./context.js";
import { scroller } from "./scroller.module.css";

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

export const RootScroller = ({children}) => {
    const { scroll, setScroll } = useContext(Context);
    const { hash } = useLocation();

    const ref = useRef(null);
    const scrollRef = useRef({ scroll, hash });

    const throttle = useThrottle();
    const onScroll = useCallback(() => {
        throttle(100, () => {
            const { current } = ref;
            if (!current) {
                return;
            }
            setScroll(current.scrollLeft, current.scrollTop);
        });
    }, [throttle, setScroll]);

    const cb = useCallback(elem => {
        ref.current = elem;
        // FIXME hash?
        const {scroll, hash} = scrollRef.current;
        if (hash || !scroll || !elem) {
            return;
        }
        const { left, top } = scroll;
        queueMicrotask(() =>
            elem.scrollTo({ left, top, behaviour: 'instant' }));
    }, []);

    return <div className={scroller} onScroll={onScroll} ref={cb}>
               {children}
           </div>;
};
