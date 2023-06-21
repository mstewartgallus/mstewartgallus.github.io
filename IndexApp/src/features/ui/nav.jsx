import { useId } from "react";
import { Card } from "./card";
import { Hgroup } from "./hgroup";

export const Nav = ({children, heading, ...props}) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <Hgroup>
                           {heading}
                       </Hgroup>
                   </header>
                   {children}
               </Card>
           </nav>;
};
