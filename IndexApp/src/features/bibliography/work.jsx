import { useId } from "react";
import { Card, Header, Hgroup } from "@features/ui";
import { WorkP } from "./work-p";
import { WorkH3 } from "./work-h3";

export const Work = ({children, authors, title, publisher, year, ...props}) => {
    const id = useId();
    return <section aria-labelledby={id} {...props}>
               <Card>
                   <Header id={id}>
                       <Hgroup>
                           <WorkH3>{authors}.{" "}</WorkH3>
                           <WorkP><cite>{title}.</cite>{" "}</WorkP>
                           <WorkP>{publisher}.{" "}</WorkP>
                           <WorkP>{year}.{" "}</WorkP>
                       </Hgroup>
                   </Header>
                   {children}
               </Card>
           </section>;
};
