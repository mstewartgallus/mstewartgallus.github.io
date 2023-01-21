import * as React from "react";
import { Link } from "gatsby";

const Hn = props => {
    const { level, children } = props;
    switch (level) {
    case 1:
        return <h1 {...props}>{children}</h1>;
    case 2:
        return <h2 {...props}>{children}</h2>;
    case 3:
        return <h3 {...props}>{children}</h3>;
    case 4:
        return <h4 {...props}>{children}</h4>;
    case 5:
        return <h5 {...props}>{children}</h5>;
    case 6:
        return <h6 {...props}>{children}</h6>;
    default:
        throw new Error(`level > 6 ${level}`);
    };
};

const HnAutolink = props => {
    const textId = React.useId();
    const { id, children } = props;
    return <Hn {...props}>
               <span role="presentation" id={textId}>{children}</span>
               {
                   id && <>
                             &emsp;
                             <Link to={`#${id}`} aria-describedby={textId}>#</Link>
                         </>
               }
           </Hn>;
};

export const H1 = props => <HnAutolink {...props} level={1}>{props.children}</HnAutolink>;
export const H2 = props => <HnAutolink {...props} level={2}>{props.children}</HnAutolink>;
export const H3 = props => <HnAutolink {...props} level={3}>{props.children}</HnAutolink>;
export const H4 = props => <HnAutolink {...props} level={4}>{props.children}</HnAutolink>;
export const H5 = props => <HnAutolink {...props} level={5}>{props.children}</HnAutolink>;
export const H6 = props => <HnAutolink {...props} level={6}>{props.children}</HnAutolink>;
