import { useId } from "react";
import { Assistive } from "../../features/util";

export const Nav = ({children, heading, ...props}) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <Assistive>
                   <header id={id}>
                       <hgroup>
                           {heading}
                       </hgroup>
                   </header>
               </Assistive>
               {children}
           </nav>;
};

export default Nav;
