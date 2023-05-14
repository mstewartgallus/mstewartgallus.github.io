import { useRef, useEffect } from "react";
import { useLocationContext } from "@features/location";

// Gatsby already handles scroll
const opts = { preventScroll: true };

export const useFocus = () => {
    const { location, prevLocation } = useLocationContext();

    const { pathname, hash } = location;
    const { pathname: prevPathname } = prevLocation;
    const changed = pathname !== prevPathname;

    const ref = useRef(null);
    useEffect(() => {
        if (!changed || hash) {
            return;
        }

        ref.current?.focus(opts);
    },  [hash, pathname, changed]);
    return ref;
};
