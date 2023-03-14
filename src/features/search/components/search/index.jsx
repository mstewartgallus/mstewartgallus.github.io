import { useId } from "react";

export const Search = ({heading, children, ...props}) => {
    const id = useId();

    return <section aria-describedby={id} role="search" {...props}>
               <header className="sr-only">
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </section>;
};

export default Search;
