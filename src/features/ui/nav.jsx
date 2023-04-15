import { useId } from "react";
import { Hgroup } from "./hgroup";

export const Nav = ({children, heading, ...props}) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <header id={id}>
                   <Hgroup>
                       {heading}
                   </Hgroup>
               </header>
               {children}
           </nav>;
};

export default Nav;
