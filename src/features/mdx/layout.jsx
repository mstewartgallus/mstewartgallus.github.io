import { useLocation } from "@gatsbyjs/reach-router";
import { MDXProvider } from '@mdx-js/react';
import { A, BreadcrumbList, BreadcrumbItem } from "@features/ui";
import { ViewportPage, SkipA } from "@features/page";
import { theme } from "./theme.jsx";

const Pathname = () => useLocation().pathname;

export const Layout = ({
    children,
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? <Pathname />;
    return <ViewportPage
               skipA={<SkipA>{title}</SkipA>}
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
