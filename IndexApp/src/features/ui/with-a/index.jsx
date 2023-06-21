import { forwardRef } from "react";
import { componentName } from "@features/util";
import { SubtleA } from "../subtle-a";

export const withA = Component => {
    const name = componentName(Component);
    const AutoLink = forwardRef(({ children, id, ...props }, ref) => {
        const href = id ? `#${id}` : null;
        return <Component {...props}>
                   <SubtleA id={id} href={href} ref={ref}>
                       {children}
                   </SubtleA>
               </Component>;
    });
    AutoLink.displayName = `A(${name})`;
    return AutoLink;
};
