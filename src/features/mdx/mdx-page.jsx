import { A, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { PageLayout } from "../../features/layout";

export const MdxPage = ({
    children,
    location: { pathname },
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? pathname;
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
