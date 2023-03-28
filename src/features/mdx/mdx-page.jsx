import { A, BreadcrumbList, BreadcrumbItem, Card, H1,
         Main, Page } from "../../features/ui";

export const MdxPage = ({
    children,
    location: { pathname },
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? pathname;
    return <Page
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <A href="/">Home</A>
                       </BreadcrumbItem>
                       <BreadcrumbItem>
                           <A aria-current="page">{title}</A>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }>
               <Card>
                   <Main heading={<H1>{title}</H1>}>
                       {children}
                   </Main>
               </Card>
           </Page>;
};

export default MdxPage;
