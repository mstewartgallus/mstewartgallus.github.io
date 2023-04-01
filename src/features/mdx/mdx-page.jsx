import { useLocation } from "@reach/router";
import { A, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { PageLayout } from "../../features/layout";

export const MdxPage = ({
    children,
    pageContext
}) => {
    const location = useLocation();
    const title = pageContext?.frontmatter?.title ?? location.pathname;
    return <PageLayout
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <A href="/">Home</A>
                       </BreadcrumbItem>
                       <BreadcrumbItem>
                           <A aria-current="page">{title}</A>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading={title}>
               {children}
           </PageLayout>;
};

export default MdxPage;
