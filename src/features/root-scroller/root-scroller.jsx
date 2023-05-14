import { useContext, useRef } from "react";
import { useLocation } from "@features/location";
import { Context } from "./context.js";
import { scroller } from "./scroller.module.css";

export const RootScroller = ({children}) => {
    const { scrollLeft, scrollTop, onScroll } = useContext(Context);
    const { hash } = useLocation();

    const { current: cb } = useRef(elem => {
        // FIXME hash?
        if (hash || !elem) {
            return;
        }

        queueMicrotask(() => {
            elem.scrollTo({
                left: scrollLeft,
                top: scrollTop,
                behaviour: 'instant'
            });
        });
    });

    return <div className={scroller} onScroll={onScroll} ref={cb}>
               {children}
           </div>;
};
