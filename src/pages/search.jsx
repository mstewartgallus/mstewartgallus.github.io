import * as React from "react";
import { Link } from "gatsby";
import { onSubmitNavigate } from "../utils/navigate.js";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Page from "../components/page.jsx";
import { Select, Option } from "../components/select.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
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
    const onChangeOption = event => {
        const { target: { checked, value } } = event;
        const next = new Set(selected);
        if (checked) {
            next.add(value);
        } else {
            next.delete(value);
        }
        onChange(next);
    }
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

const sep = "\u2009\u2014\u2009";

export const Head = () => {
    const title = "Search";
    return <>
               <HeadBasic />
               <Title title={title} />
           </>;
};

const emptyQuery = {
    s: '',
    category: new Set(),
    tag: new Set(),
    place: new Set(),
    person: new Set()
};


const SearchPage = ({ location: { search: params } }) => {
    const id = React.useId();
    const tags = usePostTags();

    const [query, setQuery] = React.useState(emptyQuery);

    const [state, dispatch] = React.useReducer(reducer, query);

    const [links, setSearch] = useSearch();

    React.useEffect(() => {
        const query = parseParams(params);
        setQuery(query);
        setSearch(query);
    }, [params, setSearch]);

    const set = (name, value) => dispatch({type: 'set', name, value});
    const onChangeS = event => set('s', event.target.value);
    const onChangeCat = value => set('category', value);
    const onChangeTag = value => set('tag', value);
    const onChangePlace = value => set('place', value);
    const onChangePerson = value => set('person', value);

    const titleId = `${id}-title`;
    const searchId = `${id}-search`;
    const heading = query.s === '' ? 'Search' : `${query.s}${sep}Search`;
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
                         onSubmit={onSubmitNavigate}>
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
