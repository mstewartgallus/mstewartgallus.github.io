import { useLocation } from "@reach/router";
import { A, Ul, Li, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { SkipA, PageLayout } from "../../features/layout";

const TableOfContents = () =>
<Ul>
    <Li>
        <SkipA aria-describedby="content" href="#content">Skip to Content</SkipA>
    </Li>
    <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
</Ul>;

export const MdxPage = ({
    children,
    pageContext,
    ...props
}) => {
    const location = useLocation();
    const title = pageContext?.frontmatter?.title ?? location.pathname;
    return <PageLayout
               tableofContents={<TableOfContents />}
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
