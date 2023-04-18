import { useDeferredValue, useEffect } from "react";
import { usePrevLocation } from "./prev-location.js";
import { getFocus } from "./focus-ref.js";

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

const Focus = () => {
    const xs = usePrevLocation();
    // Not sure if deferring focus here makes sense

    // It's not great but at least sometimes we get the focusing
    // happening a little bit AFTER the the view transition
    // animations starts and we don't get forced reflow.

    const ys = useDeferredValue(xs);

    const location = ys?.location;
    const hash = location?.hash;
    const pathname = location?.pathname;
    const prevPathname = ys?.prevLocation?.pathname;

    useEffect(() => {
        if (!prevPathname) {
            return;
        }

        if (hash) {
            const elem = document.getElementById(hash.slice(1));
            elem?.focus(opts);
            return;
        }

        if (prevPathname === pathname) {
            return;
        }

        const current = getFocus();
        if (!current) {
            return;
        }

        current.focus(opts);
    }, [prevPathname, pathname, hash]);
    return null;
};

export default Focus;
