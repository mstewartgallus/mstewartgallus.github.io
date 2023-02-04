import * as React from "react";
import Banner from "../components/banner.jsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Header from "../components/header.jsx";
import JsonLd from "../components/json-ld.jsx";
import Nav from "../components/nav.jsx";
import Post from "../components/post.jsx";
import PostList from "../components/post-list.jsx";
import Search from "../components/search.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import usePostList from "../hooks/use-post-list.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";
import useWebsite from "../hooks/use-website.js";

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

const IndexPage = props => {
    const { title, description } = useSiteMetadata();

    const json = useWebsite();
    const indices = usePostList();
    const posts = indices.ALL;
    return <>
               <Post heading={<h1>Posts</h1>}
                     sidebar={
                         <>
                             <Header
                                 heading={
                                     <>
                                         <h2>{title}</h2>
                                         <p>{description}</p>
                                     </>}>
                                 <Banner />
                             </Header>
                             <Search />
                             <Nav heading={<h2>Breadcrumbs</h2>}>
                                 <BreadcrumbList>
                                     <li aria-current="page">Home</li>
                                 </BreadcrumbList>
                             </Nav>
                         </>
                     }>
                   <PostList posts={posts} />
               </Post>
               <JsonLd srcdoc={json} />
    </>;
};

export default IndexPage;
