import * as React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Main from  "../components/main.jsx";
import Page from "../components/page.jsx";
import { Select, Option } from "../components/select.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
import { useSubmit } from "../hooks/use-submit.js";
import { usePostTags } from "../hooks/use-post-tags.js";
import { useSearch } from "../hooks/use-search.js";
import { search, query } from "./search.module.css";

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

const TagSelect = ({all, name, onChange, selected, children}) => {
    const onChangeOption = React.useCallback(event => {
        const { target: { checked, value } } = event;
        const next = new Set(selected);
        if (checked) {
            next.add(value);
        } else {
            next.delete(value);
        }
        onChange(next);
    }, [onChange, selected]);

    return <Select name={name}>
        {children}
        {
            all.map(opt =>
                <Option key={opt}
                        onChange={onChangeOption}
                        selected={selected?.has(opt)}
                        value={opt}>
                    {opt}
                </Option>)
        }</Select>;
};

const LinkList = React.memo(({links}) =>
    <ul>{
        links.map(({value, href}) =>
            <li key={href}>
                <Link to={href}>{value}</Link>
            </li>)
    }</ul>
);

const parseParams = search => {
    const params = new URLSearchParams(search);
    const s = params.get('s') ?? '';
    const category = new Set(params.getAll('category'));
    const tag = new Set(params.getAll('tag'));
    const place = new Set(params.getAll('place'));
    const person = new Set(params.getAll('person'));
    return { s, category, tag, place, person };
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'set':
        return { ...state, [action.name]: action.value };
    case 'query':
        return action.query;
    default:
        throw new Error(`Unhandled action ${action.type}`);
    }
};

const sep = "\u2009\u2014\u2009";

const useTitle = () => {
    const location = useLocation();
    const [title, setTitle] = React.useState('Search');
    React.useEffect(() => {
        const s = new URLSearchParams(location.search).get('s') ?? '';
        const newTitle = s === '' ? "Search" : `${s}${sep}Search`;
        setTitle(newTitle);
    }, [location]);
    return title;
};

export const Head = () => {
    const title = useTitle();
    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <link rel="modulepreload" href="/static/pagefind/pagefind.js" />
               <link rel="preload" href="/static/pagefind/wasm.en.pagefind"
                     as="fetch" crossOrigin="crossorigin"
                     type="application/octet-stream"
               />
           </>;
};

const emptyQuery = {
    s: '',
    category: new Set(),
    tag: new Set(),
    place: new Set(),
    person: new Set()
};

const SearchForm = () => {
    const id = React.useId();
    const tags = usePostTags();

    const [state, dispatch] = React.useReducer(reducer, emptyQuery);

    const onSubmit = useSubmit();

    const location = useLocation();
    React.useEffect(() => {
        const query = parseParams(location.search);
        dispatch({type: 'query', query });
    }, [location]);

    const set = React.useCallback((name, value) => dispatch({type: 'set', name, value}),
                                  [dispatch]);

    const onChangeS = React.useCallback(event => set('s', event.target.value), [set]);
    const onChangeCat = React.useCallback(value => set('category', value), [set]);
    const onChangeTag = React.useCallback(value => set('tag', value), [set]);
    const onChangePlace = React.useCallback(value => set('place', value), [set]);
    const onChangePerson = React.useCallback(value => set('person', value), [set]);

    return <form className={search} aria-describedby={id} role="search" rel="search"
                 action="/search"
                 onSubmit={onSubmit}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={id}>Search</h2>
                   </hgroup>
               </header>

               <Query value={state.s} onChange={onChangeS} />

               <TagSelect name="category" all={tags.category} selected={state.category} onChange={onChangeCat}>
                   <legend>Category</legend>
               </TagSelect>
               <TagSelect name="place" all={tags.place} selected={state.place} onChange={onChangePlace}>
                   <legend>Place</legend>
               </TagSelect>
               <TagSelect name="person" all={tags.people} selected={state.person} onChange={onChangePerson}>
                   <legend>People</legend>
               </TagSelect>
               <TagSelect name="tag" all={tags.tags} selected={state.tag} onChange={onChangeTag}>
                   <legend>Tags</legend>
               </TagSelect>
           </form>;
};

const PostList = () => {
    const [links, setSearch] = useSearch();
    const location = useLocation();

    React.useEffect(() => {
        const query = parseParams(location.search);
        setSearch(query);
    }, [location, setSearch]);

    return <LinkList links={links}/>;
};

const SearchPage = () => {
    const title = useTitle();

    return <Page>
               <Main title={title}>
                   <PostList />
               </Main>
               <Sidebar>
                   <SearchForm />
                   <Breadcrumbs>
                       <li><Link to="/">Home</Link></li>
                       <li aria-current="page"><cite>Search</cite></li>
                   </Breadcrumbs>
               </Sidebar>
           </Page>;
};

export default SearchPage;
