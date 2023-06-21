import { useDeferredValue, useEffect, useMemo } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    ResultList, SearchForm,
    useSearch, usePostTags, useFormState,
    useSearchState
} from "@features/search";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA } from "@features/ui";
import { ViewportPage } from "@features/page";
import { useSubmit, useClient } from "@features/util";
import { useTitle } from "../components/title.jsx";
import { separator } from "../utils/separator.js";

const parseParams = search => {
    const params = new URLSearchParams(search);
    const s = params.get('s') ?? '';
    const category = new Set(params.getAll('category'));
    const tag = new Set(params.getAll('tag'));
    const place = new Set(params.getAll('place'));
    const person = new Set(params.getAll('person'));
    return { s, category, tag, place, person };
};

const Form = ({ onSubmit, search }) => {
    const tags = usePostTags();
    const {
        s, category, tag, place, person,
        setter,
        navigate
    } = useFormState();

    useEffect(() => {
        const { s, category, tag, place, person } = parseParams(search);
        navigate({ s, category, tag, place, person });
    }, [navigate, search]);

    return <SearchForm action="/search"
                       onSubmit={onSubmit}

                       tags={tags}
                       set={setter}

                       s={s}
                       category={category}
                       tag={tag}
                       place={place}
                       person={person}
           />;
};

export const Head = () => {
    let { search = '' } = useLocation();
    const client = useClient();
    if (!client) {
        search = '';
    }

    const title = useMemo(() => {
        const { s } = parseParams(search);
        if (s === '' || !s) {
            return [];
        }
        return [s];
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

const Searcher = ({ search }) => {
    const deferredSearch = useDeferredValue(search);

    const { links, init, load } = useSearchState();

    useSearch(deferredSearch, 10, init, load);

    return <ResultList links={links} />;
};

const SearchPage = () => {
    const onSubmit = useSubmit();

    let { search = '' } = useLocation();
    const client = useClient();
    if (!client) {
        search = '';
    }

    const deferredSearch = useDeferredValue(search);
    const { s = '' } = new URLSearchParams(deferredSearch);

    return <ViewportPage
               support={<Form onSubmit={onSubmit} search={deferredSearch} />}
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
               heading={
                   s === '' ?
                       <>Results</> :
                       <>{s}{separator}Results</>
               }
           >
               <Searcher search={deferredSearch} />
           </ViewportPage>;
};

export default SearchPage;
