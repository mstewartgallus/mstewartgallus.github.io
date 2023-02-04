import * as React from "react";

export const Footer = ({children, title}) => {
    const id = React.useId();
    return <footer aria-labelledby={id}>
               <hgroup className="sr-only">
                   <h2 id={id}>{title}</h2>
               </hgroup>
               {children}
           </footer>;
};
export default Footer;
