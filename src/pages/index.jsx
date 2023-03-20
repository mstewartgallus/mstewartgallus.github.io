import { Banner, PostList, usePostList, useWebsite } from "../features/index";
import { useSearchURL } from "../features/route";
import { Search, SearchFormMini } from "../features/search";
import {
    A,
    BreadcrumbList, BreadcrumbItem,
    Card,
    H1, H2,
    Header, Main, Nav,
    Section,
    Page
} from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";
import { useSubmit } from "../hooks/use-submit.js";

const Sidebar = ({ title, description, action, onSubmit }) =>
      <>
          <Card>
              <Header
                  heading={
                      <>
                          <H2>{title}</H2>
                          <p style={{marginBlock:0}}>{description}</p>
                      </>}>
                  <Banner />
              </Header>
          </Card>
          <Card>
              <Search heading={<H2>Search</H2>}>
                  <SearchFormMini action={action} onSubmit={onSubmit} />
              </Search>
          </Card>
          <Card>
              <Nav heading={<H2>Breadcrumbs</H2>}>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <A role="link" aria-disabled="true" aria-current="page">Home</A>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Nav>
          </Card>
      </>;

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

const IndexPage = () => {
    const posts = usePostList();
    const { title, description } = useSiteMetadata();
    const json = useWebsite();
    const onSubmit = useSubmit();
    const search = useSearchURL();
    return <>
               <Page sidebar={
                         <Sidebar
                             title={title} description={description}
                             action={search}
                             onSubmit={onSubmit} />
                     }>
                   {
                       Array.from(posts.entries()).map(([category, posts]) =>
                           <Card key={category ?? "main"}>
                               {
                                   category ?
                                       <Section
                                           heading={<H2>{category}</H2>}>
                                           <PostList posts={posts} />
                                       </Section>
                                   :
                                   <Main heading={<H1>Posts</H1>}>
                                       <PostList posts={posts} />
                                   </Main>
                               }
                           </Card>
                       )
                   }
               </Page>
               <JsonLd srcdoc={json} />
           </>;
};

export default IndexPage;
