import { useLocation } from "@gatsbyjs/reach-router";
import {
    SearchForm,
    Sidebar,
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
} from "@features/ui";
import { useSubmit } from "@features/util";
import { ViewportPage } from "@features/page";
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
    return <ViewportPage
               sidebar={
                   <Sidebar
                       search={
                           <SearchForm action={search} onSubmit={onSubmit} />
                       }
                   >
                       <Header
                           heading={
                               <>
                                   <H2>{title}</H2>
                                   <Subheading>{description}</Subheading>
                               </>
                           }
                       >
                           <Banner />
                       </Header>
                   </Sidebar>
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
                               <nav
                                   key={category}
                                   aria-labelledby={category}>
                                       <AccordionPanel
                                           value={category}
                                           summary={
                                               <Card>
                                                   <header>
                                                       <Hgroup>
                                                           <AccordionSummary id={category}>
                                                               {category}
                                                           </AccordionSummary>
                                                       </Hgroup>
                                                   </header>
                                               </Card>
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
           </ViewportPage>;
};


export default IndexPage;
