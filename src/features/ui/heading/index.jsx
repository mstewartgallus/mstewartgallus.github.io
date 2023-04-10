import { forwardRef } from "react";
import { useUnder } from "@features/util";
import { heading } from "./heading.module.css";

const createHeading = Hn => {
    const name = Hn;
    const Heading = ({
        children,
        id,
        tabIndex="-1",
        className = '',
        ...props
    }, ref) => {
        const under = useUnder();
        if (under) {
            id = null;
        }
        return <Hn tabIndex={tabIndex} className={`${heading} ${className}`} id={id} {...props} ref={ref}>
            {children}
        </Hn>;
    };
    Heading.displayName = `createHeading(${name})`;
    return forwardRef(Heading);
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');
