import * as React from "react";
import { A } from "../features/ui";

const AutoLink = ({to, ...props}) => {
    const href = `#${to}`;
    return to &&
        <>
            &emsp;
            <A {...props} href={href}>#</A>
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

export const H1 = createAutoLink('h1');
export const H2 = createAutoLink('h2');
export const H3 = createAutoLink('h3');
export const H4 = createAutoLink('h4');
export const H5 = createAutoLink('h5');
export const H6 = createAutoLink('h6');
