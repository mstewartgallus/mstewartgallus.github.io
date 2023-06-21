import { useId } from "react";
import { Input, Button, Card } from "@features/ui";
import { legend, query, queryContent } from "./search-form.module.css";

export const Query = ({value, onChange}) => {
    const id = useId();

    return <fieldset className={query}>
               <legend className={legend}>Basic</legend>
               <Card>
                   <span>Basic</span>
                   <div className={queryContent}>
                       <label htmlFor={id}>
                           Query
                       </label>
                       <Input id={id}
                              name="s" type="search"
                              value={value}
                              onChange={onChange}
                       />
                       <Button type="submit">Search</Button>
                   </div>
               </Card>
           </fieldset>;
};
