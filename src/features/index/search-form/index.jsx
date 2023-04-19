import { useId } from "react";
import { Input, Button, Card } from "@features/ui";
import { query } from "./search-form.module.css";

export const SearchForm = ({action, onSubmit}) => {
    const id = useId();

    return <form rel="search" action={action} onSubmit={onSubmit}>
               <Card>
                   <fieldset className={query}>
                       <label htmlFor={id}>Query</label>
                       <Input id={id} name="s" type="search" required />
                       <Button type="submit">Search</Button>
                   </fieldset>
               </Card>
           </form>;
};
