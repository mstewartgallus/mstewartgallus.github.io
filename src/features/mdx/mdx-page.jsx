import { A, BreadcrumbList, BreadcrumbItem, H1 } from "../../features/ui";
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
               heading={<H1>{title}</H1>}>
               {children}
           </PageLayout>;
};

export default MdxPage;
