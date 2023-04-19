import { useId } from "react";
import { Card } from "./card";
import { Hgroup } from "./hgroup";

export const Header = ({children, heading, ...props}) => {
    const id = useId();
    return <header aria-describedby={id} {...props}>
               <Card>
                   <Hgroup id={id}>
                       {heading}
                   </Hgroup>
                   {children}
               </Card>
           </header>;
};
