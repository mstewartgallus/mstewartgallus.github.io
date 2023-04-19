import { useDeferredValue, useEffect } from "react";
import { useChanged } from "@features/util";
import { usePostLocation } from "@features/post-location";
import { getFocus } from "./focus-ref.js";

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

const Focus = () => {
    const location = usePostLocation();
    const deferred = useDeferredValue(location);
    const { pathname, hash } = deferred;
    const changed = useChanged(pathname);

    useEffect(() => {
        if (!changed) {
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
    },  [hash, pathname, changed]);
    return null;
};

export default Focus;
