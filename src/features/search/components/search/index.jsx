import { useId } from "react";
import { Assistive } from "../../../../features/util";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <search role="search" aria-describedby={id} {...props}>
               <Assistive>
                   <header>
                       <hgroup id={id}>
                           {heading}
                       </hgroup>
                   </header>
               </Assistive>
               {children}
           </search>;
};

export default Search;
