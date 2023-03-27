import { useId } from "react";
import { Hgroup } from "./hgroup";

export const Header = ({children, heading, ...props}) => {
    const id = useId();
    return <header aria-describedby={id} {...props}>
               <Hgroup id={id}>
                   {heading}
               </Hgroup>
               {children}
           </header>;
};

export default Header;
