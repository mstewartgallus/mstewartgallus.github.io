import { useId } from "react";
import { Search as SearchPf } from "../../features/polyfill";
import { Assistive } from "../../features/util";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <SearchPf aria-describedby={id} {...props}>
               <Assistive>
                   <header>
                       <hgroup id={id}>
                           {heading}
                       </hgroup>
                   </header>
               </Assistive>
               {children}
           </SearchPf>;
};

export default Search;
