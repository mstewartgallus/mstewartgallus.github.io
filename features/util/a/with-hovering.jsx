import { forwardRef } from "react";
import { componentName } from "../component-name";
import { useFocus } from "./use-focus";

export const withHovering = Component => {
    const WithHovering = forwardRef((props, ref) => {
        const { onFocus, onMouseEnter } = useFocus(props);
        return <Component {...props}
                          onFocus={onFocus} onMouseEnter={onMouseEnter}
                          ref={ref} />;
    });
    WithHovering.displayName = `Hovering(${componentName(Component)})`;
    return WithHovering;
};
