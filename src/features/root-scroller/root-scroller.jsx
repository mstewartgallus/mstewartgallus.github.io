import { useContext, useCallback, useLayoutEffect, useRef } from "react";
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
    const { scroll: [left, top], setScroll } = useContext(Context);
    const { hash } = useLocation();

    const ref = useRef(null);
    const scrollRef = useRef({ left, top, hash });

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

    useLayoutEffect(() => {
        // FIXME hash?
        const {left, top, hash} = scrollRef.current;
        if (hash) {
            return;
        }
        ref.current?.scrollTo({ left, top, behaviour: 'instant' });
    }, []);

    return <div className={scroller} onScroll={onScroll} ref={ref}>
               {children}
           </div>;
};
