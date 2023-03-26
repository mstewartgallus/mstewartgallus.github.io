import { A, BreadcrumbList, BreadcrumbItem, Card, H1,
         Main, Nav, Page } from "../../features/ui";

const Sidebar = ({ title }) =>
<Card>
    <Nav heading={<h2>Breadcrumbs</h2>}>
        <BreadcrumbList>
            <BreadcrumbItem>
                <A href="/">Home</A>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <A aria-current="page">{title}</A>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Nav>
</Card>;

export const MdxPage = ({
    children,
    location: { pathname },
    pageContext
}) => {
    const title = pageContext?.frontmatter?.title ?? pathname;
    return <Page
               sidebar={<Sidebar title={title} />}>
               <Card>
                   <Main heading={<H1>{title}</H1>}>
                       {children}
                   </Main>
               </Card>
           </Page>;
};

export default MdxPage;
