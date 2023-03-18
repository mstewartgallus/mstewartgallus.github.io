import { useTransition, useReducer, useState, useEffect, useMemo, useCallback } from "react";
import { ResultList, Search, SearchForm, useSearch, usePostTags } from "../features/search";
import { A, BreadcrumbList, BreadcrumbItem, Card, Main, Nav, Page } from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import Title from "../components/title.jsx";
import useSubmit from "../hooks/use-submit.js";
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
      "Search" :
      <>{query}{separator}Search</>;

const Sidebar = ({state, set, tags, action, onSubmit}) =>
      <>
          <Card>
              <Search heading={<h2>Search</h2>}>
                  <SearchForm action={action}
                              onSubmit={onSubmit}
                              tags={tags}
                              set={set}
                              state={state}
                  />
              </Search>
          </Card>
          <Card>
              <Nav heading={<h2>Breadcrumbs</h2>}>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <A href="/">Home</A>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                          <A role="link" aria-disabled="true" aria-current="page">
                              Search
                          </A>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Nav>
          </Card>
      </>;

export const Head = ({location}) => {
    const [search, setSearch] = useState(null);
    useEffect(() => {
        setSearch(location.search);
    }, [location]);

    const title = useMemo(() => {
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
    const [state, dispatch] = useReducer(reducer, initState);
    const [isPending, startTransition] = useTransition();

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

    return <Page sidebar={<Sidebar
                              state={state}
                              set={setter}
                              tags={tags}
                              action="/search"
                              onSubmit={onSubmit}
                          />}>
               <Card>
                   <Main heading={<h1><Heading query={query} /></h1>}>
                       <ResultList links={state.links} />
                   </Main>
               </Card>
           </Page>;
};

export default SearchPage;
