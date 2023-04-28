import { forwardRef, useImperativeHandle, useRef } from "react";
import { useLocal } from "./use-local.js";
import { useClick } from "./use-click";
import { useFocus } from "./use-focus";
import { useHover } from "./use-hover";
import { useHovering } from "./use-hovering";
import { useNear } from "./use-intersect";
import { usePrefetchPathname } from "./use-prefetch-pathname";

const A = (props, ref) => {
    const local = useLocal(props);

    const { href } = props;

    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, []);

    const {focus, ...focusProps} = useFocus(props);
    const {hover, ...hoverProps} = useHover(props);
    const near = useNear(myref);

    useHovering(local && hover ? href : null);
    usePrefetchPathname(local && (hover || near) ? href : null);

    const clickProps = useClick(props);

    if (local) {
        return <a
                   {...props}
                   {...clickProps}
                   {...focusProps}
                   {...hoverProps}
                   ref={myref}
               />;
    }
    return <a {...props} ref={myref} />;
};

const ARef = forwardRef(A);

export { ARef as A };
