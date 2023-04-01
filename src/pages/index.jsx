import { useLocation } from "@reach/router";
import { memo, useCallback, useMemo, useReducer } from "react";
import { Sidebar, Banner, Accordion, Panel, PostList, usePostList, usePosts, useWebsite } from "../features/index";
import { useSearchURL } from "../features/route";
import { SearchFormMini } from "../features/search";
import {
    BreadcrumbList, BreadcrumbItem,
    Card,
    H2,
    Header
} from "../features/ui";
import { PageLayout } from "../features/layout";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";
import { useSubmit } from "../hooks/use-submit.js";

const initState = null;

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case 'toggle': {
        const { category } = action;
        return state === category ? null : category;
    }

    default:
        return state;
    }
};

const Panels = ({posts, onClick}) => useMemo(() => Object.entries(posts).map(([category, posts]) =>
    [category, {
        posts,
        onClick(e) {
            onClick(category, e);
        }
    }]), [posts, onClick]).map(([category, { posts, onClick }]) =>
        <Panel
            key={category}
            value={category}
            heading={category}
            onClick={onClick}>
            <PostList posts={posts} />
        </Panel>
    );

const AccordionImpl = () => {
    const postsByCategory = usePostList();

    const [state, dispatch] = useReducer(reducer, initState);

    const onClick = useCallback((category, e) => {
        dispatch({ type: 'toggle', category });
    }, []);

    return <Accordion value={state}>
               <Panels posts={postsByCategory} onClick={onClick} />
           </Accordion>;
};

const AccordionMemo = memo(AccordionImpl);

const title = "Table of Contents";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

export const Head = () => {
    const json = useWebsite();
    return <>
               <Title>{title}</Title>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <Seo />
               <JsonLd srcdoc={json} />
           </>;
};

const IndexPage = () => {
    const posts = usePosts();
    const { title, description } = useSiteMetadata();
    const onSubmit = useSubmit();
    const search = useSearchURL();
    return <PageLayout
               sidebar={
                   <Sidebar
                       search={
                           <SearchFormMini action={search} onSubmit={onSubmit} />
                       }
                   >
                       <Card>
                           <Header
                               heading={
                                   <>
                                       <H2>{title}</H2>
                                       <p style={{marginBlock:0}}>{description}</p>
                                   </>}>
                               <Banner />
                           </Header>
                       </Card>
                   </Sidebar>
               }
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <span aria-current="page">Home</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               mainbar={<AccordionMemo />}

               heading="Posts"
           >
               <PostList posts={posts} />
           </PageLayout>;
};


export default IndexPage;
