import { useId } from "react";
import { useSearchURL } from "../../../../features/route";
import { useSubmit } from "../../../../hooks/use-submit.js";
import { query } from "./search-form.module.css";

export const SearchForm = () => {
    const id = useId();
    const search = useSearchURL();
    const onSubmit = useSubmit();

    return <form rel="search" action={search} onSubmit={onSubmit}>
               <div className={query}>
                   <label htmlFor={id}>Query</label>
                   <input id={id} name="s" type="search" required />
                   <button type="submit">Search</button>
               </div>
           </form>;
};

export default SearchForm;
