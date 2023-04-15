import { useLocation } from "@gatsbyjs/reach-router";
import { MDXProvider } from '@mdx-js/react';
import { A, BreadcrumbList, BreadcrumbItem } from "@features/ui";
import { ViewportPage, Outline, OutlineItem } from "@features/page";
import { theme } from "./theme.jsx";

const TableOfContents = ({heading}) =>
<Outline>
    <OutlineItem href="#content">{heading}</OutlineItem>
    <OutlineItem href="#breadcrumbs">Breadcrumbs</OutlineItem>
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
