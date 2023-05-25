import { useId } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    PostList,
    usePostList, usePosts
} from "@features/index";
import {
    A,
    BreadcrumbList, BreadcrumbA, BreadcrumbItem,
    Card,
    H2A,
    Hgroup,
    Ul,
    Li
} from "@features/ui";
import { ViewportPage } from "@features/page";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "Posts";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

export const Head = () => {
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <Seo />
           </>;
};

const BlogPage = () => {
    const posts = usePosts();
    const postsByCategory = usePostList();
    const navId = useId();
    return <ViewportPage
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbA href="/">Home</BreadcrumbA>
                       <BreadcrumbItem>
                           <span aria-current="page">Blog</span>
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


export default BlogPage;
