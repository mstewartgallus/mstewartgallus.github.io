import { useId } from "react";
import { Assistive } from "../../features/util";
import { Hgroup } from "./hgroup";

export const Nav = ({children, heading, ...props}) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <Assistive>
                   <header id={id}>
                       <Hgroup>
                           {heading}
                       </Hgroup>
                   </header>
               </Assistive>
               {children}
           </nav>;
};

export default Nav;
