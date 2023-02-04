import * as React from "react";

export const Footer = ({children, heading, ...props}) => {
    const id = React.useId();
    return <footer {...props} aria-labelledby={id}>
               <hgroup className="sr-only" id={id}>
                   {heading}
               </hgroup>
               {children}
           </footer>;
};
export default Footer;
