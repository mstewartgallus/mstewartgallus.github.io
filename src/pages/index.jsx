import { useLocation } from "@gatsbyjs/reach-router";
import { useCallback, useMemo, useReducer } from "react";
import { Sidebar, Banner, Accordion, Panel, PostList, usePostList, usePosts, useWebsite } from "@features/index";
import { useSearchURL } from "@features/route";
import { SearchFormMini } from "@features/search";
import {
    BreadcrumbList, BreadcrumbItem,
    Card,
    A,
    H2,
    Ul, Li,
    Header
} from "@features/ui";
import { ViewportPage, SkipA } from "@features/page";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
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
            id={category}
            heading={category}
            onClick={onClick}>
            <PostList posts={posts} />
        </Panel>
    );

const AccordionImpl = ({posts}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const onClick = useCallback((category, e) => {
        dispatch({ type: 'toggle', category });
    }, []);

    return <Accordion value={state}>
               <Panels posts={posts} onClick={onClick} />
           </Accordion>;
};

const title = "Table of Contents";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

const TableOfContents = ({posts}) =>
      <>
          <SkipA aria-describedby="content" href="#content">Posts</SkipA>
          <Ul>
              {
                  posts.map(category =>
                      <Li key={category}><A href={`#${category}`}>{category}</A></Li>)
              }
              <Li><A href="#banner" aria-describedby="banner">Common</A></Li>
              <Li><A href="#search">Search</A></Li>
              <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
          </Ul>
      </>;

export const Head = () => {
    const json = useWebsite();
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
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
    const postsByCategory = usePostList();
    return <ViewportPage
               tableOfContents={<TableOfContents posts={Object.keys(postsByCategory)} />}
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
                                       <H2 id="banner">{title}</H2>
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
               mainbar={<AccordionImpl posts={postsByCategory} />}

               heading="Posts"
           >
               <PostList posts={posts} />
           </ViewportPage>;
};


export default IndexPage;
