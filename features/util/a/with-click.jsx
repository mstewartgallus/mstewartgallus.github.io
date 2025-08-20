import { forwardRef } from "react";
import { componentName } from "../component-name.js";
import { useClick } from "./use-click";

export const withClick = Component => {
    const WithClick = forwardRef((props, ref) => {
        const onClick = useClick(props);
        return <Component {...props} onClick={onClick} ref={ref} />;
    });
    WithClick.displayName = `Click(${componentName(Component)})`;
    return WithClick;
};
