import * as React from "react";
import A from "../components/a.jsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Nav from  "../components/nav.jsx";
import { Select, Option } from "../components/select.jsx";
import Search from "../components/search.jsx";
import Title from "../components/title.jsx";
import useSubmit from "../hooks/use-submit.js";
import usePostTags from "../hooks/use-post-tags.js";
import useSearch from "../hooks/use-search.js";
import { separator } from "../utils/separator.js";
import { search, query, result as resultClass } from "./search.module.css";

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
    if (!search) {
        return null;
    }
    const params = new URLSearchParams(search);
    const s = params.get('s') ?? '';
    const category = new Set(params.getAll('category'));
    const tag = new Set(params.getAll('tag'));
    const place = new Set(params.getAll('place'));
    const person = new Set(params.getAll('person'));
    return { s, category, tag, place, person };
};

const Result = ({url, title}) => <A href={url}>{title}</A>;
const Loading = () => <A>Loading</A>;

const Results = ({results}) =>
      results.map(({id, result}) =>
          <li key={id} className={resultClass}
              aria-hidden={result ? null : "true"}>
              {
                  result ?
                      <Result {...result} /> :
                  <Loading />
              }
          </li>);

const ResultList = ({results}) =>
    <ul>
        <Results results={results} />
    </ul>;

const DynamicResultList = ({search}) => {
    const results = useSearch(search, 10);

    if (results) {
        return <ResultList results={results} />;
    } else {
        return <ul aria-hidden="true" />;
    }
};

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

    return <form className={search} rel="search"
                 action="/search"
                 onSubmit={onSubmit}>
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

const Heading = ({location}) => {
    const [search, setSearch] = React.useState(null);
    React.useEffect(() => {
            setSearch(location.search);
    }, [location]);

    const params = React.useMemo(() => parseParams(search), [search]);

    const query = params?.s;

    if (query === '' || !query) {
        return <h1 tabIndex="-1">Search</h1>;
    }
    return <h1 tabIndex="-1">{query}{separator}Search</h1>;
};

const Sidebar = () => {
    const [state, dispatch] = React.useReducer(reducer, emptyQuery);

    const set = React.useCallback((name, value) => dispatch({type: 'set', name, value}),
                                  [dispatch]);

    const onSubmit = useSubmit();
    const tags = usePostTags();

    return <>
               <Search heading={<h2>Search</h2>}>
                   <SearchForm onSubmit={onSubmit}
                               tags={tags}
                               set={set}
                               state={state}
                   />
               </Search>
               <Nav heading={<h2>Breadcrumbs</h2>}>
                   <BreadcrumbList>
                       <li><A href="/">Home</A></li>
                       <li aria-current="page"><cite>Search</cite></li>
                   </BreadcrumbList>
               </Nav>
           </>;
};

export const Head = ({location}) => {
    const [search, setSearch] = React.useState(null);
    React.useEffect(() => {
        setSearch(location.search);
    }, [location]);

    const title = React.useMemo(() => {
        const s = parseParams(search)?.s;
        if (s === '' || !s) {
            return 'Search';
        }
        return [s, 'Search'];
    }, [search]);

    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <link rel="modulepreload" href="/static/pagefind/pagefind.js" />
               <link rel="preload" href="/static/pagefind/wasm.en.pagefind"
                     as="fetch" crossOrigin="crossOrigin"
                     type="application/octet-stream"
               />
           </>;
};

const SearchPage = ({location}) => {
    const [search, setSearch] = React.useState(null);
    React.useEffect(() => {
            setSearch(location.search);
    }, [location]);

    return <DynamicResultList search={search} />;
};

SearchPage.Heading = Heading;
SearchPage.Sidebar = Sidebar;

export default SearchPage;
