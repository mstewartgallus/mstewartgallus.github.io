import { Fragment, useId } from "react";
import { Banner, PostList, usePostList, useWebsite } from "../features/index";
import { Search, SearchForm } from "../features/search";
import { BreadcrumbList, Header, Main, Nav, Page } from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";

const title = "Table of Contents";

const Sidebar = () => {
    const { title, description } = useSiteMetadata();

    return <>
               <Header
                   heading={
                       <>
                           <h2>{title}</h2>
                           <p>{description}</p>
                       </>}>
                   <Banner />
               </Header>
               <Search heading={<h2>Search</h2>}>
                   <SearchForm />
               </Search>
               <Nav heading={<h2>Breadcrumbs</h2>}>
                   <BreadcrumbList>
                       <li aria-current="page">Home</li>
                   </BreadcrumbList>
               </Nav>
           </>;
};

const Foot = () => {
    const json = useWebsite();
    return <JsonLd srcdoc={json} />;
};

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <SeoBasic title={title} url={url} />
           </>;
};

const Section = ({ children, heading, ...props}) => {
    const id = useId();
    return <section {...props} aria-labelledby={id}>
               <header>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </section>;
};

const IndexPage = () => {
    const posts = usePostList();
    return <>
               <Page sidebar={<Sidebar />}>
                   {
                       Array.from(posts.entries()).map(([category, posts]) =>
                           category ?
                               <Section key={category}
                                        heading={<h2>{category}</h2>}>
                                   <PostList posts={posts} />
                               </Section>
                           :
                           <Main key="main" heading={<h1>Posts</h1>}>
                               <PostList posts={posts} />
                           </Main>
                       )
                   }
               </Page>
               <Foot />
           </>;
};

export default IndexPage;
