import { forwardRef } from "react";
import { withClick } from "./with-click.jsx";
import { withHovering } from "./with-hovering.jsx";
import { withPrefetch } from "./with-prefetch.jsx";
import { useLocal } from "./use-local.js";

const ALocal = withClick(withHovering(withPrefetch('a')));

export const A = forwardRef((props, ref) => {
    const local = useLocal(props);

    if (local) {
        return <ALocal {...props} ref={ref} />;
    }
    return <a {...props} ref={ref} />;
});
A.displayName = 'A';
