import { useLocation } from "@reach/router";
import { MDXProvider } from '@mdx-js/react';
import { A, Ul, Li, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { SkipA, PageLayout } from "../../features/layout";
import { defaults } from "./defaults.jsx";

const TableOfContents = ({heading}) =>
      <>
          <SkipA href="#content">{heading}</SkipA>
          <Ul>
              <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
          </Ul>
      </>;

export const Layout = ({
    children,
    pageContext,
    ...props
}) => {
    const location = useLocation();
    const title = pageContext?.frontmatter?.title ?? location.pathname;
    return <PageLayout
               tableofContents={<TableOfContents heading={title} />}
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
               <MDXProvider components={defaults}>
                   {children}
               </MDXProvider>
           </PageLayout>;
};

export default Layout;
