import { useId } from "react";
import { Assistive } from "../../../../features/util";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <section aria-labelledby={id} role="search" {...props}>
               <Assistive>
                   <header>
                       <hgroup id={id}>
                           {heading}
                       </hgroup>
                   </header>
               </Assistive>
               {children}
           </section>;
};

export default Search;
