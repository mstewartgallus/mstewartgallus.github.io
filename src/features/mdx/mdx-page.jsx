import { useLocation } from "@reach/router";
import { A, Ul, Li, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { SkipA, PageLayout } from "../../features/layout";

const TableOfContents = ({heading}) =>
      <>
          <SkipA href="#content">{heading}</SkipA>
          <Ul>
              <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
          </Ul>
      </>;

export const MdxPage = ({
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
               {children}
           </PageLayout>;
};

export default MdxPage;
