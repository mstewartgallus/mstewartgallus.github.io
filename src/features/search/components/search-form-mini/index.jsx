import { useId } from "react";
import { Button } from "../../../../features/ui";
import { query } from "./search-form.module.css";

export const SearchFormMini = ({action, onSubmit}) => {
    const id = useId();

    return <form rel="search" action={action} onSubmit={onSubmit}>
               <div className={query}>
                   <label htmlFor={id}>Query</label>
                   <input id={id} name="s" type="search" required />
                   <Button type="submit">Search</Button>
               </div>
           </form>;
};

export default SearchFormMini;
