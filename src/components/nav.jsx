import * as React from "react";

export const Nav = ({children, heading}) => {
    const id = React.useId();
    return <nav aria-labelledby={id}>
               <header className="sr-only">
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </nav>;
};
export default Nav;
