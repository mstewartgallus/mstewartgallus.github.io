import * as React from "react";
import { Link } from "gatsby";

const Hn = props => {
    const level = props.level;
    switch (level) {
    case 1:
        return <h1 {...props}>{props.children}</h1>;
    case 2:
        return <h2 {...props}>{props.children}</h2>;
    case 3:
        return <h3 {...props}>{props.children}</h3>;
    case 4:
        return <h4 {...props}>{props.children}</h4>;
    case 5:
        return <h5 {...props}>{props.children}</h5>;
    case 6:
        return <h6 {...props}>{props.children}</h6>;
    default:
        throw new Error(`level > 6 ${level}`);
    };
};

const HnAutolink = props => {
    const textId = React.useId();
    const { id, children } = props;
    if (!id) {
        return <Hn {...props}>{children}</Hn>;
    }
    return <Hn {...props}>
        <span role="presentation" id={textId}>{children}</span>
        &emsp;
        <Link to={`#${id}`} aria-describedby={textId}>#</Link>
        </Hn>;
};

export const H1 = props => <HnAutolink {...props} level={1}>{props.children}</HnAutolink>;
export const H2 = props => <HnAutolink {...props} level={2}>{props.children}</HnAutolink>;
export const H3 = props => <HnAutolink {...props} level={3}>{props.children}</HnAutolink>;
export const H4 = props => <HnAutolink {...props} level={4}>{props.children}</HnAutolink>;
export const H5 = props => <HnAutolink {...props} level={5}>{props.children}</HnAutolink>;
export const H6 = props => <HnAutolink {...props} level={6}>{props.children}</HnAutolink>;
