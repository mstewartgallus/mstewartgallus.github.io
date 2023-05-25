import { useId } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    SearchForm,
    useWebsite
} from "@features/index";
import { useSearchURL } from "@features/route";
import {
    BlockA,
    BreadcrumbList, BreadcrumbItem,
    Card,
    ClickTrap,
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

const title = "Site";

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

const Banner = () =>
<Ul>
    <Li><BlockA href="/portfolio/">Portfolio<ClickTrap /></BlockA></Li>
    <Li><BlockA href="/blog/">Blog<ClickTrap /></BlockA></Li>
    <Li><BlockA download="feed.xml" rel="alternate" href="/feed.xml">Subscribe (RSS)<ClickTrap /></BlockA></Li>
    <Li><BlockA rel="author" href="/about/">About the Author<ClickTrap /></BlockA></Li>
    <Li><BlockA href="/README">About this Blog<ClickTrap /></BlockA></Li>
</Ul>;

const IndexPage = () => {
    const { title, description } = useSiteMetadata();
    const onSubmit = useSubmit();
    const search = useSearchURL();
    const id = useId();
    return <ViewportPage
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
               heading={title}
               subheading={<Subheading>{description}</Subheading>}
           >
               <Banner />
           </ViewportPage>;
};


export default IndexPage;
