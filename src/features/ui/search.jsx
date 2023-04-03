import { useId } from "react";
import { Search as SearchPf } from "../../features/polyfill";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <SearchPf aria-describedby={id} {...props}>
               <header>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </SearchPf>;
};

export default Search;
