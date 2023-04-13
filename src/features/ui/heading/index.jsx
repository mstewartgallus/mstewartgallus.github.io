import { forwardRef } from "react";
import { heading } from "./heading.module.css";

const createHeading = Hn => {
    const name = String(Hn);
    const Heading = (props, ref) => {
        const className = [heading, props.className ?? ''].join(' ');
        return <Hn
                   {...props}
                   className={className}
                   ref={ref}
               />;
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
