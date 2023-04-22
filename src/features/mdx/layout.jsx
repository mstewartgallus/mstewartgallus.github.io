import { useLocation } from "@gatsbyjs/reach-router";
import { MDXProvider } from '@mdx-js/react';
import { A, BreadcrumbList, BreadcrumbItem, ClickTrap } from "@features/ui";
import { ViewportPage, SkipA } from "@features/page";
import { theme } from "./theme.jsx";

const Pathname = () => useLocation().pathname;

export const Layout = ({
    children,
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? <Pathname />;
    return <ViewportPage
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <A href="/">Home<ClickTrap /></A>
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
