import * as React from "react";
import { navigate, Link } from "gatsby";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Option from "../components/option.jsx";
import Page from "../components/page.jsx";
import Select from "../components/select.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
import { usePostTags } from "../hooks/use-post-tags.js";
import { useSearch } from "../hooks/use-search.js";
import * as Search from "../utils/search.js";
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
    const [getter, setter] = React.useState(new Set(selected));

    const onChangeOption = event => {
        const { target: { checked, value } } = event;
        const next = new Set(getter);
        if (checked) {
            next.add(value);
        } else {
            next.delete(value);
        }
        setter(next);
        onChange(next);
    }
    return <Select name={name}>
        {children}
        {
            all.map(opt =>
                <Option key={opt}
                        onChange={onChangeOption}
                        selected={getter.has(opt)}
                        value={opt}>
                    {opt}
                </Option>)
        }</Select>;
};

const LinkList = ({links}) =>
<ul>{
    links.map(({value, href}) =>
        <li key={href}>
            <Link to={href}>{value}</Link>
        </li>)
}</ul>;

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
    default:
        throw new Error(`Unhandled action ${action.type}`);
    }
};

export const Head = ({location: {pathname, search}}) => {
    const { s } = parseParams(search);
    const title = s === '' ? 'Search' : `${s}\u2009\u2014\u2009Search`;
    return <>
               <HeadBasic pathname={pathname} />
               <Title>{title}</Title>
           </>;
};

const SearchPage = ({ location }) => {
    const xs = parseParams(location.search);

    const id = React.useId();
    const tags = usePostTags();

    const [query, setQuery] = React.useState(xs);
    const [state, dispatch] = React.useReducer(reducer, xs);

    const links = useSearch(query);

    const set = (name, value) => dispatch({type: 'set', name, value});
    const onChangeS = event => set('s', event.target.value);
    const onChangeCat = value => set('category', value);
    const onChangeTag = value => set('tag', value);
    const onChangePlace = value => set('place', value);
    const onChangePerson = value => set('person', value);

    const onSubmit = event => {
        event.preventDefault();

        // FIXME just go where it was going to go anyhow
        setQuery(state);

        navigate(
            Search.search(
                ['s', state.s],
                ...Array.from(state.category).map(c => ['category', c]),
                ...Array.from(state.tag).map(c => ['tag', c]),
                ...Array.from(state.person).map(c => ['person', c]),
                ...Array.from(state.place).map(c => ['place', c]))
        );
    };

    const titleId = `${id}-title`;
    const searchId = `${id}-search`;
    const heading = xs.s === '' ? 'Search' : `${xs.s}\u2009\u2014\u2009Search`;
    return <Page>
               <main aria-describedby={titleId}>
                   <header>
                       <hgroup>
                           <h1 id={titleId}>{heading}</h1>
                       </hgroup>
                   </header>

                   <LinkList links={links}/>
               </main>
               <Sidebar>
                   <form className={search} aria-describedby={searchId} role="search" rel="search"
                         action="/search"
                         onSubmit={onSubmit}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={searchId}>Search</h2>
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
           </form>
                   <Breadcrumbs>
                       <li><Link to="/">Home</Link></li>
                       <li aria-current="page"><cite>Search</cite></li>
                   </Breadcrumbs>
               </Sidebar>
           </Page>;
};

export default SearchPage;
