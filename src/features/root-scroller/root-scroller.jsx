import { useContext, useCallback, useLayoutEffect, useRef } from "react";
import { useLocationContext } from "@features/location";
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
    const { scroll: [x, y], setScroll } = useContext(Context);

    const { location, prevLocation } = useLocationContext();

    const { pathname, hash } = location;
    const { pathname: prevPathname } = prevLocation;
    const changed = pathname !== prevPathname;

    const ref = useRef(null);

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
        if (!changed || hash) {
            return;
        }
        ref.current?.scrollTo(x, y);
    }, [x, y, changed, hash]);

    return <div className={scroller} onScroll={onScroll} ref={ref}>
               {children}
           </div>;
};
