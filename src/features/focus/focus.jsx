import { useCallback, useEffect, useDeferredValue, useState, useTransition } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import { useOnRouteUpdate } from "./my-location.js";
import { getFocus } from "./focus-ref.js";

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

const useFocus = () => {
    const location = useLocation();
    const deferredLocation = useDeferredValue(location);

    const [, startTransition] = useTransition();
    const [prevLocation, setPrevLocation] = useState(deferredLocation);
    const endNavigate = useCallback(() => {
        startTransition(() => setPrevLocation(deferredLocation));
    }, [deferredLocation]);

    const { hash, pathname } = deferredLocation;
    const { pathname: prevPathname } = prevLocation;

    return { hash, pathname, prevPathname, endNavigate };
};

const Focus = () => {
    // Do a silly little dance to update the focus lazily and avoid
    // forced reflow
    const { hash, pathname, prevPathname, endNavigate } = useFocus();
    const isNavigating = prevPathname !== pathname;

    useEffect(() => {
        if (pathname === prevPathname) {
            return;
        }

        if (hash) {
            return;
        }

        // FIXME useRef?
        const current = getFocus();
        if (!current) {
            return;
        }

        current.focus(opts);
    },  [hash, pathname, prevPathname]);

    useOnRouteUpdate(endNavigate);
};

export default Focus;
