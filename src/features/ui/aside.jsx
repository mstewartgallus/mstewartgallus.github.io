import { useId } from "react";
import { Card } from "./card";
import { Hgroup } from "./hgroup";

export const Aside = ({children, heading, ...props}) => {
    const id = useId();
    return <aside aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <Hgroup>
                           {heading}
                       </Hgroup>
                   </header>
                   {children}
               </Card>
           </aside>;
};
