import type { ReactNode, Ref, ElementType, ComponentType, JSX } from "react";
import { createElement } from "react";
import { componentName } from "@/features/util";
import SubtleA from "../SubtleA";

interface Props {
    children?: ReactNode;
    id?: string;
    ref?: Ref<HTMLAnchorElement>;
}

export const withA = <P extends JSX.IntrinsicAttributes,>(Component: ElementType<P>) => {
    const name = componentName(Component);
    const AutoLink = (props: Props & P) => {
        const { children, id, ref } = props;
        const href = id ? `#${id}` : undefined;
        return createElement(Component, props,
                   <SubtleA id={id} href={href} ref={ref}>
                       {children}
                             </SubtleA>);
    };
    AutoLink.displayName = `A(${name})`;
    return AutoLink;
};
