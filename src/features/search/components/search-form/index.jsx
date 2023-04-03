import { useId, useCallback, useMemo } from "react";
import { Input, Button } from "../../../../features/ui";
import { Legend } from "../../components/legend";
import { Select, Option } from "../../components/select";
import { query, queryContent } from "./search-form.module.css";

const Query = ({value, onChange}) => {
    const id = useId();

    return <fieldset className={query}>
               <Legend>Basic</Legend>
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
           </fieldset>;
};

const Options = ({options, onChange, selected}) => useMemo(() => options.map(option => {
    const checked = selected?.has(option);

    return {
        option,
        selected: checked,
        onChange(e) {
            onChange(e, option, checked);
        }
    };
}), [options, selected, onChange]).map(({
    option,
    selected,
    onChange
}) => <Option key={option}
              onChange={onChange}
              selected={selected}
              value={option}>
          {option}
      </Option>);

const Selects = ({
    state,
    onChange
}) => useMemo(() => state.map(({selected, options, legend, name}) => {
    return {
        options,
        name,
        legend,
        selected,
        onChange(e, option, checked) {
            onChange(e, option, checked, name);
        }
    };
}), [state, onChange]).map(({
    name,
    options,
    legend,
    selected,
    onChange
}) => <Select key={name} name={name}>
          <Legend>{legend}</Legend>
          <Options options={options} selected={selected} onChange={onChange} />
      </Select>);

const legends = {
    category: 'Category',
    place: 'Place',
    person: 'Person',
    tag: 'Tag'
};

export const SearchForm = ({
    action,
    onSubmit,
    tags,
    state,
    set
}) => {
    const onChangeS = useCallback(event => set('s', event.target.value), [set]);

    const onChangeSelect = useCallback((event, option, checked, name) => {
        const old = state[name];

        const next = new Set(old);
        if (checked) {
            next.delete(option);
        } else {
            next.add(option);
        }

        set(name, next);
    }, [set, state]);

    const selects = (({ category, place, tag, person }) => ({ category, place, person, tag }))(state);

    const theState = Object.entries(selects).map(([name, selected]) => {
        const legend = legends[name];
        const options = tags[name];
        return { name, selected, legend, options };
    });

    return <form rel="search" action={action} onSubmit={onSubmit}>
               <Query value={state.s} onChange={onChangeS} />

               <Selects state={theState}
                        onChange={onChangeSelect}
               />
           </form>;
};

export default SearchForm;
