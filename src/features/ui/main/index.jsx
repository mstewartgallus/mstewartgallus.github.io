import { useId } from "react";
import { Hgroup } from "../hgroup";

export const Main = ({children, heading, notice, ...props}) => {
    const id = useId();
    return <main data-pagefind-body="" aria-describedby={id} {...props}>
               <header>
                   <Hgroup id={id}>
                       {heading}
                   </Hgroup>
                   {notice}
               </header>
               {children}
           </main>;
};
