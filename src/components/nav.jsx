import * as React from "react";

export const Nav = ({children, title}) => {
    const id = React.useId();
    return <nav aria-labelledby={id}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={id}>{title}</h2>
                   </hgroup>
               </header>
               {children}
           </nav>;
};
export default Nav;
