import { useId } from "react";
import { Card } from "./card";

export const Section = ({children, heading, ...props}) => {
    const id = useId();
    return <section aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <hgroup>
                           {heading}
                       </hgroup>
                   </header>
                   {children}
               </Card>
           </section>;
};
