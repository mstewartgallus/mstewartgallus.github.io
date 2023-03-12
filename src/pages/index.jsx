import { Fragment } from "react";
import { Banner, PostList, usePostList } from "../features/index";
import { Search, SearchForm } from "../features/search";
import BreadcrumbList from "../components/breadcrumb-list";
import HeadBasic from "../components/head-basic.jsx";
import Header from "../components/header.jsx";
import JsonLd from "../components/json-ld.jsx";
import Nav from "../components/nav.jsx";
import Page from "../components/page";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";
import useWebsite from "../hooks/use-website.js";

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

const IndexPage = () => {
    const posts = usePostList();
    return <>
               <Page heading={<h1 tabIndex="-1">Posts</h1>}
                     sidebar={<Sidebar />}
               >
                   {
                       Array.from(posts.entries()).map(([category, posts]) =>
                           <Fragment key={category}>
                               {category && <h2>{category}</h2>}
                               <PostList posts={posts} />
                           </Fragment>)
                   }
               </Page>
               <Foot />
           </>;
};

export default IndexPage;
