import { useLocation } from "@gatsbyjs/reach-router";
import { useTransition, useReducer, useState, useEffect, useMemo, useCallback } from "react";
import { ResultList, SearchForm, useSearch, usePostTags } from "@features/search";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA } from "@features/ui";
import { ViewportPage } from "@features/page";
import { useSubmit } from "@features/util";
import { useTitle } from "../components/title.jsx";
import { separator } from "../utils/separator.js";

const initState = {
    links: [],
    s: '',
    category: new Set(),
    tag: new Set(),
    place: new Set(),
    person: new Set()
};

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case "init": {
        const { linkIds } = action;
        return { ...state, links: linkIds.map(id => ({ id, loaded: false })) };
    }

    case "load": {
        let { links } = state;
        const { index, url, title } = action;
        const { id } = links[index];
        links = Array.from(links);
        links[index] = { id, loaded: true, url, title };
        return { ...state, links };
    }

    case 'set': {
        const { name, value } = action;
        return { ...state, [name]: value };
    }

    default:
        return state;
    }
};

const set = (name, value) => ({ type: 'set', name, value });
const init = linkIds => ({ type: 'init', linkIds });
const load = (index, url, title) => ({ type: 'load', index, url, title });

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

const Heading = ({query}) =>
      (query === '' || !query) ?
      "Results" :
      <>{query}{separator}Results</>;

export const Head = () => {
    const [search, setSearch] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setSearch(location.search);
    }, [location]);

    const title = useMemo(() => {
        const s = parseParams(search)?.s;
        if (s === '' || !s) {
            return [];
        }
        return [];
    }, [search]);

    const fulltitle = useTitle(...title, 'Search');
    return <>
               <title>{fulltitle}</title>
               <link rel="modulepreload" href="/static/pagefind/pagefind.js" />
               <link rel="preload" href="/static/pagefind/wasm.en.pagefind"
                     as="fetch" crossOrigin="crossOrigin"
                     type="application/octet-stream"
               />
           </>;
};

const SearchPage = () => {
    const location = useLocation();
    const [state, dispatch] = useReducer(reducer, initState);
    const [, startTransition] = useTransition();

    const onSubmit = useSubmit();
    const tags = usePostTags();

    useEffect(() => {
        startTransition(() => dispatch(set('search', location.search)));
    }, [location]);

    const onInit = useCallback(
        links => startTransition(() => dispatch(init(links))),
        []);

    const onLoad = useCallback(
        (index, url, title) => startTransition(() => dispatch(load(index, url, title))),
        []);

    const setter = useCallback(
        (name, value) => dispatch(set(name, value)),
        []);

    const params = useMemo(() => parseParams(state.search), [state.search]);

    useSearch(state.search, 10, onInit, onLoad);

    const query = params?.s;

    return <ViewportPage
               sidebar={
                   <SearchForm action="/search"
                               onSubmit={onSubmit}

                               tags={tags}
                               set={setter}

                               state={state}
                   />
               }
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbA href="/">Home</BreadcrumbA>
                       <BreadcrumbItem>
                           <span aria-current="page">
                               Search
                           </span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading={<Heading query={query} />}
           >
               <ResultList links={state.links} />
           </ViewportPage>;
};

export default SearchPage;
