import * as React from "react";
import { Link } from "gatsby";

import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Main from  "../components/main.jsx";
import Page from "../components/page.jsx";
import { Select, Option } from "../components/select.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
import { separator } from "../utils/separator.js";
import { useSubmit } from "../hooks/use-submit.js";
import { usePostTags } from "../hooks/use-post-tags.js";
import { useSearch } from "../hooks/use-search.js";
import { search, query } from "./search.module.css";

const emptyQuery = {
    s: '',
    category: new Set(),
    tag: new Set(),
    place: new Set(),
    person: new Set()
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'set':
        return { ...state, [action.name]: action.value };
    default:
        throw new Error(`Unhandled action ${action.type}`);
    }
};

const parseParams = search => {
    const params = new URLSearchParams(search);
    const s = params.get('s') ?? '';
    const category = new Set(params.getAll('category'));
    const tag = new Set(params.getAll('tag'));
    const place = new Set(params.getAll('place'));
    const person = new Set(params.getAll('person'));
    return { s, category, tag, place, person };
};

const Posts = ({links}) =>
      links.map(({value, href}) =>
          <li key={href}>
              <Link to={href}>{value}</Link>
          </li>);

const PostList = ({links}) => <ul><Posts links={links}/></ul>;

const Query = ({value, onChange}) => {
    const id = React.useId();

    return <div className={query}>
               <label htmlFor={id}>Query</label>
               <input id={id} name="s" type="search"
                      value={value}
                      onChange={onChange}
               />
               <button type="submit">Search</button>
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

const SearchForm = ({onSubmit, tags, state, set}) => {
    const id = React.useId();

    const onChangeS = React.useCallback(event => set('s', event.target.value), [set]);

    const onChangeOption = React.useCallback(event => {
        const { target: { checked, name, value } } = event;

        const next = new Set(state[name]);
        if (checked) {
            next.add(value);
        } else {
            next.delete(value);
        }

        set(name, next);
    }, [set, state]);

    return <form className={search} aria-describedby={id} role="search" rel="search"
                 action="/search"
                 onSubmit={onSubmit}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={id}>Search</h2>
                   </hgroup>
               </header>

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

export const Head = ({location}) => {
    const [title, setTitle] = React.useState(['Search']);

    React.useEffect(() => {
        const s = parseParams(location.search).s;
        const title =
              (s === '' || s === null) ? ['Search'] :
              [s, 'Search'];
        setTitle(title);
    }, [location]);

    return [
        <HeadBasic />,
        <Title>{title}</Title>,
        <link rel="modulepreload" href="/static/pagefind/pagefind.js" />,
        <link rel="preload" href="/static/pagefind/wasm.en.pagefind"
              as="fetch" crossOrigin="crossOrigin"
              type="application/octet-stream"
        />
    ];
};

const SearchPage = ({location}) => {
    const [links, setSearch] = useSearch();
    const onSubmit = useSubmit();

    const [state, dispatch] = React.useReducer(reducer, emptyQuery);
    const [title, setTitle] = React.useState(['Search']);
    const tags = usePostTags();

    React.useEffect(() => {
        const query = parseParams(location.search);
        setSearch(query);
    }, [location, setSearch]);

    React.useEffect(() => {
        const s = parseParams(location.search).s;
        const title =
              (s === '' || s === null) ? ['Search'] :
              [s, separator, 'Search'];
        setTitle(title);
    }, [location]);

    const set = React.useCallback((name, value) => dispatch({type: 'set', name, value}),
                                  [dispatch]);

    return <Page>
               <Main title={title}>
                   <PostList links={links} />
               </Main>
               <Sidebar>
                   <SearchForm location={location}
                               onSubmit={onSubmit}
                               tags={tags}
                               set={set}
                               state={state}
                   />
                   <Breadcrumbs>
                       <li><Link to="/">Home</Link></li>
                       <li aria-current="page"><cite>Search</cite></li>
                   </Breadcrumbs>
               </Sidebar>
           </Page>;
};

export default SearchPage;
