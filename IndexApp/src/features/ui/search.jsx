import { useId } from "react";
import { Search as SearchPf } from "@features/polyfill";
import { Card } from "./card";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <SearchPf aria-describedby={id} {...props}>
               <Card>
                   <header>
                       <hgroup id={id}>
                           {heading}
                       </hgroup>
                   </header>
               </Card>
               {children}
           </SearchPf>;
};
