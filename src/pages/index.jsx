import * as React from "react";
import Banner from "../components/banner.jsx";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import Page from "../components/page.jsx";
import PostList from "../components/post-list.jsx";
import Search from "../components/search.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const useJSON = () => {
    const site = useSiteMetadata();
    const search = useAbsolute('/search');
    const index = useAbsolute('/');
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": site.title,
        "description": site.description,
        "url": index,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${search}?s={s}`
            },
            "query-input": "required name=s"
        }
    };
};

export const Head = ({location: {pathname}}) =>
<>
    <HeadBasic pathname={pathname} />
    <Title>Table of Contents</Title>
    <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
</>;

const IndexPage = () => {
    const id = React.useId();
    return <>
               <Page>
                   <main aria-describedby={id}>
                       <header>
                           <hgroup>
                               <h1 id={id}>Posts</h1>
                           </hgroup>
                       </header>
                       <PostList />
                   </main>
                   <Sidebar>
                       <Banner />
                       <Search />
                       <Breadcrumbs>
                           <li aria-current="page">Home</li>
                       </Breadcrumbs>
                   </Sidebar>
               </Page>
               <JsonLd srcdoc={useJSON()} />
           </>;
};

export default IndexPage;
