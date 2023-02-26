import * as React from "react";
import Banner from "../components/banner.jsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Header from "../components/header.jsx";
import JsonLd from "../components/json-ld.jsx";
import Nav from "../components/nav.jsx";
import Page from "../components/page.jsx";
import PostList from "../components/post-list.jsx";
import SearchForm from "../components/search-form.jsx";
import Search from "../components/search.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useIndexAll from "../hooks/use-index-all.js";
import useIndexCategory from "../hooks/use-index-category.js";
import usePostList from "../hooks/use-post-list.js";
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
    const indices = usePostList();
    const indexAll = useIndexAll();
    const indexCategory = useIndexCategory();
    const allPosts = indices[indexAll];
    const postsByCategory =
          Object.entries(indexCategory)
          .map(([category, id]) => [category, indices[id]]);

    return <>
               <Page heading={<h1 tabIndex="-1">Posts</h1>}
                     sidebar={<Sidebar />}
               >
                   <PostList posts={allPosts} />

                   {
                       postsByCategory.map(([category, posts]) =>
                           <React.Fragment key={category}>
                               <h2>{category}</h2>
                               <PostList posts={posts} />
                           </React.Fragment>)
                   }
               </Page>
               <Foot />
    </>;
};

export default IndexPage;
