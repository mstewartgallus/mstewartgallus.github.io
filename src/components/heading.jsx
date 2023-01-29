import * as React from "react";
import { Link } from "gatsby";

const AutoLink = ({to, ...props}) => {
    const href = `#${to}`;
    return to &&
        <>
            &emsp;
            <Link {...props} to={href}>#</Link>
        </>;
};

const createAutoLink = Hn =>
      function HeadingAutoLink({id, children, ...props}) {
          const textId = React.useId();
          return <Hn {...props} id={id}>
                     <span role="presentation" id={textId}>{children}</span>
                     <AutoLink to={id} aria-describedby={textId}>#</AutoLink>
                 </Hn>;
      };

const CH1 = props => <h1 {...props}>{props.children}</h1>;
const CH2 = props => <h2 {...props}>{props.children}</h2>;
const CH3 = props => <h3 {...props}>{props.children}</h3>;
const CH4 = props => <h4 {...props}>{props.children}</h4>;
const CH5 = props => <h5 {...props}>{props.children}</h5>;
const CH6 = props => <h6 {...props}>{props.children}</h6>;

export const H1 = createAutoLink(CH1);
export const H2 = createAutoLink(CH2);
export const H3 = createAutoLink(CH3);
export const H4 = createAutoLink(CH4);
export const H5 = createAutoLink(CH5);
export const H6 = createAutoLink(CH6);
