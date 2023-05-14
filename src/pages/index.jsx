import { useId } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    SearchForm,
    Banner,
    PostList,
    usePostList, usePosts, useWebsite
} from "@features/index";
import { useSearchURL } from "@features/route";
import {
    A,
    BreadcrumbList, BreadcrumbItem,
    Card,
    H2A,
    Header,
    Hgroup,
    Subheading,
    Ul,
    Li
} from "@features/ui";
import { ScreenOnly, useSubmit } from "@features/util";
import { ViewportPage } from "@features/page";
import { Search } from "@features/polyfill";
import { JsonLd } from "../components/json-ld.jsx";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const title = "Posts";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

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
    const id = useId();
    const navId = useId();
    return <ViewportPage
               support={
                   <header aria-describedby={id}>
                       <Card>
                           <Hgroup id={id}>
                               <H2A id="common">{title}</H2A>
                               <Subheading>{description}</Subheading>
                           </Hgroup>
                           <Banner />
                       </Card>
                   </header>
               }
               navigation={
                   <ScreenOnly>
                       <Search aria-describedby="search">
                           <Card>
                               <Header>
                                   <Hgroup>
                                       <H2A id="search">Search</H2A>
                                   </Hgroup>
                               </Header>
                               <SearchForm action={search} onSubmit={onSubmit} />
                           </Card>
                       </Search>
                   </ScreenOnly>
               }
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <span aria-current="page">Home</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               mainbar={
                   Object.entries(postsByCategory).map(([category, p]) =>
                       <nav key={category} aria-labelledby={category}>
                           <Card>
                               <header>
                                   <Hgroup>
                                       <H2A id={category}>
                                           {category}
                                       </H2A>
                                   </Hgroup>
                               </header>
                               <PostList posts={p} />
                           </Card>
                       </nav>
                   )
               }

               heading="Posts"
           >
               <nav aria-labelledby={navId}>
                   <span id={navId}>Categories</span>
                   <Ul>
                       {
                           Object.keys(postsByCategory).map(category =>
                               <Li key={category}>
                                   <A href={`#` + category}>{category}</A>
                               </Li>)
                       }
                   </Ul>
               </nav>
               <PostList posts={posts} />
           </ViewportPage>;
};


export default IndexPage;
