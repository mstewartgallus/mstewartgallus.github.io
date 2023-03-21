import { useId, useCallback } from "react";
import { Input, Button } from "../../../../features/ui";
import { Select, Option } from "../../components/select";
import { query } from "./search-form.module.css";

const Query = ({value, onChange}) => {
    const id = useId();

    return <div className={query}>
               <label htmlFor={id}>Query</label>
               <Input id={id} name="s" type="search"
                      value={value}
                      onChange={onChange}
               />
               <Button type="submit">Search</Button>
           </div>;
};

const Options = ({options, onChange, selected}) =>
      options.map(opt =>
          <Option key={opt}
                  onChange={onChange}
                  selected={selected?.has(opt)}
                  value={opt}>
              {opt}
          </Option>);

export const SearchForm = ({action, onSubmit, tags, state, set}) => {
    const onChangeS = useCallback(event => set('s', event.target.value), [set]);

    const onChangeOption = useCallback(event => {
        const { target: { checked, name, value } } = event;

        const next = new Set(state[name]);
        if (checked) {
            next.add(value);
        } else {
            next.delete(value);
        }

        set(name, next);
    }, [set, state]);

    return <form rel="search" action={action} onSubmit={onSubmit}>
               <Query value={state.s} onChange={onChangeS} />

               <Select name="category">
                   <legend>Category</legend>
                   <Options options={tags.category} selected={state.category}
                            onChange={onChangeOption} />
               </Select>

               <Select name="place">
                   <legend>Place</legend>
                   <Options options={tags.place} selected={state.place}
                            onChange={onChangeOption} />
               </Select>

               <Select name="person">
                   <legend>People</legend>
                   <Options options={tags.people} selected={state.person}
                            onChange={onChangeOption} />
               </Select>

               <Select name="tag">
                   <legend>Tags</legend>
                   <Options options={tags.tags} selected={state.tag}
                            onChange={onChangeOption} />
               </Select>
           </form>;
};

export default SearchForm;
