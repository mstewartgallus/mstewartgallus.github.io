import { forwardRef, useImperativeHandle, useRef } from "react";
import { componentName } from "../component-name.js";
import { withPrefetch } from "./with-prefetch.jsx";
import { useLocal } from "./use-local.js";
import { useClick } from "./use-click";
import { useFocus } from "../use-focus";
import { useHover } from "../use-hover";
import { useHovering } from "./use-hovering";

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
        const { href } = props;
        const {focus, onFocus, onBlur} = useFocus(props);
        const {hover, onMouseEnter, onMouseLeave} = useHover(props);
        useHovering((focus || hover) ? href : null);
        return <Component {...props}
                          onFocus={onFocus} onBlur={onBlur}
                          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
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
