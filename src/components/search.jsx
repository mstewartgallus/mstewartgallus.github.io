import * as React from "react";
import { search } from "./search.module.css";

export const Search = ({heading, children}) => {
    const id = React.useId();

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
