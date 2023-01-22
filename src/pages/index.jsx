import * as React from "react";
import Banner from "../components/banner.jsx";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import Page from "../components/page.jsx";
import PostList from "../components/post-list.jsx";
import Search from "../components/search.jsx";
import SeoBasic from "../components/seo-basic.jsx";
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

const title = "Table of Contents";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <Title title={title}/>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <SeoBasic title={title} url={url} />
           </>;
};

const IndexPage = props => {
    const id = React.useId();
    const json = useJSON();
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
               <JsonLd srcdoc={json} />
           </>;
};

export default IndexPage;