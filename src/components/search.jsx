import * as React from "react";
import { useSubmit } from "../hooks/use-submit.js";
import { search, query } from "./search.module.css";

export const Search = () => {
    const id = React.useId();
    const onSubmit = useSubmit();

    const titleId = `${id}-title`;
    const inputId = `${id}-input`;

    return <form className={search} aria-describedby={titleId}
                 role="search" rel="search" action="/search"
                 onSubmit={onSubmit}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={titleId}>Search</h2>
                   </hgroup>
               </header>

               <div className={query}>
                   <label htmlFor={inputId}>Query</label>
                   <input id={inputId} name="s" type="search" required />
                   <button type="submit">Search</button>
               </div>
           </form>;
};

export default Search;
