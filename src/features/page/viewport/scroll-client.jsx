import { useDeferredValue } from "react";
import { useScrollRestoration } from "gatsby";

export const ScrollClient = ({scrolled}) => {
    const scroll = useScrollRestoration(`viewport`);
    // Defer scroll to avoid forced reflow
    const deferredScroll = useDeferredValue(scroll);
    return scrolled(deferredScroll);
};

export default ScrollClient;
