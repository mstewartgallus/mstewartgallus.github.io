import * as React from "react";

export const Header = ({ children, heading, ...props }) => {
    const id = React.useId();
    return <header {...props} aria-describedby={id}>
               <hgroup id={id}>
                   {heading}
               </hgroup>
               {children}
           </header>;
};

export default Header;
