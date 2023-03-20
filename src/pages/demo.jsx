import { useId, useState, useCallback } from "react";
import { Banner, PostList, usePostList, useWebsite } from "../features/index";
import { useSearchURL } from "../features/route";
import { Search, SearchFormMini } from "../features/search";
import {
    A,
    BreadcrumbList, BreadcrumbItem,
    Card,
    H1,
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

const Sidebar = ({ title, description, action, onSubmit }) =>
      <>
          <Card>
              <Header
                  heading={
                      <>
                          <h2>{title}</h2>
                          <p style={{marginBlock:0}}>{description}</p>
                      </>}>
                  <Banner />
              </Header>
          </Card>
          <Card>
              <Search heading={<h2>Search</h2>}>
                  <SearchFormMini action={action} onSubmit={onSubmit} />
              </Search>
          </Card>
          <Card>
              <Nav heading={<h2>Breadcrumbs</h2>}>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <A role="link" aria-disabled="true" aria-current="page">Home</A>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Nav>
          </Card>
      </>;

const Panel = ({children, heading}) => {
    const detailsId = useId();
    const headingTextId = useId();
    const headingId = useId();
    const contentId = useId();
    const [open, setOpen] = useState(false);

    const onToggle = useCallback(e => {
        e.preventDefault();
        setOpen(o => !o);
    }, []);

    return <article aria-labelledby={headingId}>
               <span role="presentation" aria-owns={headingId} />
               <span role="presentation" aria-owns={contentId} />
               <details
                   id={detailsId}
                   onToggle={onToggle}
                   open={open ? "open" : null}
               >
                   <summary
                       style={{display: 'block'}}
                       aria-labelledby={headingTextId}
                       aria-controls={contentId}
                       aria-expanded={String(open)}
                   >
                       <span role="presentation" aria-owns={headingTextId} />
                       <h2 id={headingId} aria-labelledby={headingTextId}>
                           <span role="presentation" aria-owns={detailsId} />
                           <span role="presentation" id={headingTextId}>
                               {heading}
                           </span>
                       </h2>
                   </summary>
                   <div role="presentation" id={contentId}>
                       {children}
                   </div>
               </details>
           </article>;
};

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
    const posts = usePostList();
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
                   {
                       Array.from(posts.entries()).map(([category, posts]) =>
                           <Card key={category ?? "main"}>
                               {
                                   category ?
                                       <Panel
                                           heading={category}>
                                           <PostList posts={posts} />
                                       </Panel>
                                   :
                                   <Main heading={<H1>Posts</H1>}>
                                       <PostList posts={posts} />
                                   </Main>
                               }
                           </Card>
                       )
                   }
               </Page>
               <JsonLd srcdoc={json} />
           </>;
};

export default IndexPage;
