import { memo, useMemo, useReducer } from "react";
import { Banner, Accordion, Panel, PostList, usePostList, usePosts, useWebsite } from "../features/index";
import { useSearchURL } from "../features/route";
import { Search, SearchFormMini } from "../features/search";
import {
    A,
    BreadcrumbList, BreadcrumbItem,
    Card,
    H1, H2,
    Header, Main, Nav,
    Section,
    Page
} from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
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

const AccordionImpl = () => {
    const postsByCategory = usePostList();

    const [state, dispatch] = useReducer(reducer, initState);

    const sections = useMemo(() => Object.fromEntries(Object.entries(postsByCategory).map(([category, posts]) =>
        [category, {
            posts,
            onClick(e) {
                dispatch({ type: 'toggle', category });
            }
        }])), [postsByCategory]);

    return <Accordion value={state}>
               {
                   Object.entries(sections).map(([category, { posts, onClick }]) =>
                       <Panel
                           key={category}
                           value={category}
                           heading={category}
                           onClick={onClick}>
                           <PostList posts={posts} />
                       </Panel>
                   )
               }
           </Accordion>;
};

const AccordionMemo = memo(AccordionImpl);

const Sidebar = ({ title, description, action, onSubmit }) =>
      <>
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
          <Card>
              <Search heading={<H2>Search</H2>}>
                  <SearchFormMini action={action} onSubmit={onSubmit} />
              </Search>
          </Card>
          <Card>
              <Nav heading={<H2>Breadcrumbs</H2>}>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <A aria-current="page">Home</A>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Nav>
          </Card>
      </>;

const title = "Table of Contents";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <SeoBasic title={title} url={url} />
           </>;
};

const IndexPage = () => {
    const posts = usePosts();
    const { title, description } = useSiteMetadata();
    const json = useWebsite();
    const onSubmit = useSubmit();
    const search = useSearchURL();
    return <>
               <Page sidebar={
                         <Sidebar
                             title={title} description={description}
                             action={search}
                             onSubmit={onSubmit} />
                     }>
                   <Card>
                       <Main heading={<H1>Posts</H1>}>
                           <PostList posts={posts} />
                       </Main>
                   </Card>
                   <AccordionMemo />
               </Page>
               <JsonLd srcdoc={json} />
           </>;
};


export default IndexPage;
