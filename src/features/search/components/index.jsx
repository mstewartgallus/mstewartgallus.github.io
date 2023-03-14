import { useId } from "react";

export const Search = ({heading, children}) => {
    const id = useId();

    return <section className={search} aria-describedby={id}
                 role="search">
               <header className="sr-only">
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>

               {children}
           </section>;
};

export default Search;
