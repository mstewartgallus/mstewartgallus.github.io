import { useCallback, useMemo } from "react";
import { Card, Column, Hgroup, H2 } from "@features/ui";
import { Search } from "@features/polyfill";
import { Select, Option } from "../select";
import { Query } from "../query";

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
}) => <Select key={name} name={name} label={legend}>
          <Card>
              <span>{legend}</span>
              <Options options={options} selected={selected} onChange={onChange} />
          </Card>
      </Select>
                          );

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
    s,
    tag,
    category,
    place,
    person,
    set
}) => {
    const onChangeS = useCallback(e => set('s', e.target.value), [set]);

    const selects = useMemo(() => ({ category, place, person, tag }), [category, place, person, tag]);

    const onChangeSelect = useCallback((e, option, checked, name) => {
        const old = selects[name];

        const next = new Set(old);
        if (checked) {
            next.delete(option);
        } else {
            next.add(option);
        }

        set(name, next);
    }, [set, selects]);

    const theState = Object.entries(selects).map(([name, selected]) => {
        const legend = legends[name];
        const options = tags[name];
        return { name, selected, legend, options };
    });

    return <Search>
               <form rel="search" action={action} onSubmit={onSubmit}>
                   <Column>
                       <header>
                           <Card>
                               <Hgroup>
                                   <H2>Search</H2>
                               </Hgroup>
                           </Card>
                       </header>

                       <Query value={s} onChange={onChangeS} />

                       <Selects state={theState}
                                onChange={onChangeSelect}
                       />
                   </Column>
               </form>
           </Search>;
};
