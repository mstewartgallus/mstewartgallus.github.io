import { useLocation } from "@gatsbyjs/reach-router";
import { MDXProvider } from '@mdx-js/react';
import { A, Ul, Li, BreadcrumbList, BreadcrumbItem } from "@features/ui";
import { ViewportPage, SkipA, Outline } from "@features/page";
import { theme } from "./theme.jsx";

const TableOfContents = ({heading}) =>
<Outline
    content={<SkipA href="#content">{heading}</SkipA>}
>
    <Ul>
        <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
    </Ul>
</Outline>;

const Pathname = () => useLocation().pathname;

export const Layout = ({
    children,
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? <Pathname />;
    return <ViewportPage
               tableOfContents={<TableOfContents heading={title} />}
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <A href="/">Home</A>
                       </BreadcrumbItem>
                       <BreadcrumbItem>
                           <span aria-current="page">{title}</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading={title}>
               <MDXProvider components={theme}>
                   {children}
               </MDXProvider>
           </ViewportPage>;
};

export default Layout;
