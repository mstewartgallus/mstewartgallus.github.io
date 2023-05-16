import { useContext, useLayoutEffect, useRef } from "react";
import { Context } from "./context.js";
import { scroller } from "./scroller.module.css";

const Scroller = ({
    children, scrollLeft, scrollTop, onScroll
}) => {
    const ref = useRef(null);
    const scroll = useRef({ scrollLeft, scrollTop });

    useLayoutEffect(() => {
        const { current: { scrollLeft, scrollTop } } = scroll;
        ref.current.scrollTo({
            left: scrollLeft,
            top: scrollTop,
            behaviour: 'instant'
        });
    }, []);

    return <div className={scroller} onScroll={onScroll} ref={ref}>
               {children}
           </div>;
};

export const RootScroller = ({children}) => {
    const { scrollLeft, scrollTop, onScroll } = useContext(Context);
    return <Scroller scrollLeft={scrollLeft} scrollTop={scrollTop}
                     onScroll={onScroll}>
               {children}
           </Scroller>;
};
