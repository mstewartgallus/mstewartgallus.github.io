import { useId } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    SearchForm,
    Banner,
    Accordion,
    AccordionPanel,
    AccordionSummary,
    PostList,
    usePostList, usePosts, useWebsite
} from "@features/index";
import { useSearchURL } from "@features/route";
import {
    BreadcrumbList, BreadcrumbItem,
    Card,
    H2,
    Header,
    Hgroup,
    Subheading,
    SubtleA,
    Theme
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
    return <Theme>
               <ViewportPage
                   support={
                       <header aria-describedby={id}>
                           <Card>
                               <Hgroup id={id}>
                                   <H2><SubtleA id="common" href="#common">{title}</SubtleA></H2>
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
                                           <H2><SubtleA id="search" href="#search">Search</SubtleA></H2>
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
                       <Accordion>
                           {
                               Object.entries(postsByCategory).map(([category, p]) =>
                                   <nav aria-labelledby={category}>
                                       <AccordionPanel
                                           value={category}
                                           summary={
                                               <header>
                                                   <Card>
                                                       <Hgroup>
                                                           <H2>
                                                               <AccordionSummary id={category}>
                                                                   {category}
                                                               </AccordionSummary>
                                                           </H2>
                                                       </Hgroup>
                                                   </Card>
                                               </header>
                                           }>
                                           <Card>
                                               <PostList posts={p} />
                                           </Card>
                                       </AccordionPanel>
                                   </nav>
                               )
                           }
                       </Accordion>
                   }

                   heading="Posts"
               >
                   <PostList posts={posts} />
               </ViewportPage>
           </Theme>;
};


export default IndexPage;
