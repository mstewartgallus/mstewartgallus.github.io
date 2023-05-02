import { useContext, useCallback, useEffect, useRef } from "react";
import { useLocationContext } from "@features/location";
import { Context } from "./context.js";
import { scroller } from "./scroller.module.css";

export const RootScroller = ({children}) => {
    const { scroll, setScroll } = useContext(Context);

    const { location, prevLocation } = useLocationContext();

    const { pathname, hash } = location;
    const { pathname: prevPathname } = prevLocation;
    const changed = pathname !== prevPathname;

    const ref = useRef(null);

    // Throttle scroll measurement
    const dirty = useRef(false);
    const onScroll = useCallback(() => {
        if (dirty.current) {
            return;
        }
        dirty.current = true;

        setTimeout(() => {
            const { current } = ref;
            if (!current) {
                return;
            }
            setScroll([0, current.scrollTop]);
            dirty.current = false;
        }, 100);
    }, [setScroll]);

    useEffect(() => {
        if (!changed || hash) {
            return;
        }
        const [x, y] = scroll;
        ref.current.scrollTo(x, y);
    }, [scroll, changed, hash]);

    return <div className={scroller} onScroll={onScroll} ref={ref}>
               {children}
           </div>;
};
