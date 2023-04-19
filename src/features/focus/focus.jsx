import { useEffect } from "react";
import { usePrevious } from "@features/util";
import { usePostLocation } from "@features/post-location";
import { getFocus } from "./focus-ref.js";

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

const Focus = () => {
    // FIXME consider useDeferredValue ?
    const { pathname, hash } = usePostLocation();
    const prevPathname = usePrevious(pathname);

    useEffect(() => {
        if (hash) {
            return;
        }
        if (prevPathname === pathname) {
            return;
        }

        // FIXME useRef?
        const current = getFocus();
        if (!current) {
            return;
        }

        current.focus(opts);
    },  [hash, pathname, prevPathname]);
    return null;
};

export default Focus;
