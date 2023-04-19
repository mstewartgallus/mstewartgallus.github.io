import { useId } from "react";
import { Card } from "./card";

export const Footer = ({children, heading, ...props}) => {
    const id = useId();
    return <footer aria-labelledby={id} {...props}>
               <Card>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
                   {children}
               </Card>
           </footer>;
};
