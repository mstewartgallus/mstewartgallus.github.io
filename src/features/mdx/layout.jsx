import { MDXProvider } from '@mdx-js/react';
import { useLocation } from "@features/location";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA, Theme } from "@features/ui";
import { ViewportPage } from "@features/page";
import { theme } from "./theme.jsx";

const Pathname = () => useLocation().pathname;

export const Layout = ({ children, pageContext }) => {
    const title = pageContext?.frontmatter?.title ?? <Pathname />;
    return <Theme>
               <ViewportPage
                   breadcrumbs={
                       <BreadcrumbList>
                           <BreadcrumbA href="/">Home</BreadcrumbA>
                           <BreadcrumbItem>
                               <span aria-current="page">{title}</span>
                           </BreadcrumbItem>
                       </BreadcrumbList>
                   }
                   heading={title}>
                   <MDXProvider components={theme}>
                       {children}
                   </MDXProvider>
               </ViewportPage>
           </Theme>;
};
