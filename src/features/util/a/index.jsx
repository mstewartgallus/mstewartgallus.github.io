import { forwardRef, useEffect } from "react";
import { componentName } from "../component-name.js";
import { withPrefetch } from "./with-prefetch.jsx";
import { useLocal } from "./use-local.js";
import { useClick } from "./use-click";
import { useFocus } from "./use-focus";

const withClick = Component => {
    const WithClick = forwardRef((props, ref) => {
        const onClick = useClick(props);
        return <Component {...props} onClick={onClick} ref={ref} />;
    });
    WithClick.displayName = `Click(${componentName(Component)})`;
    return WithClick;
};

const withHovering = Component => {
    const WithHovering = forwardRef((props, ref) => {
        const { onFocus, onMouseEnter } = useFocus(props);
        return <Component {...props}
                          onFocus={onFocus} onMouseEnter={onMouseEnter}
                          ref={ref} />;
    });
    WithHovering.displayName = `Hovering(${componentName(Component)})`;
    return WithHovering;
};

const ALocal = withClick(withHovering(withPrefetch('a')));

export const A = forwardRef((props, ref) => {
    const local = useLocal(props);

    if (local) {
        return <ALocal {...props} ref={ref} />;
    }
    return <a {...props} ref={ref} />;
});
A.displayName = 'A';
