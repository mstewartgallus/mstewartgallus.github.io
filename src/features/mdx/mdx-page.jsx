import { MDXProvider } from '@mdx-js/react';
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
                <A role="link" aria-disabled="true" aria-current="page">{title}</A>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Nav>
</Card>;

export const MdxPage = props => {
    const {
        children,
        location: { pathname },
        pageContext
    } = props;
    const title = pageContext?.frontmatter?.title ?? pathname;
    // Prevent doublying up
    return <MDXProvider components={{ wrapper: null}}>
               <Page
                   sidebar={<Sidebar title={title} />}>
                   <Card>
                       <Main heading={<H1>{title}</H1>}>
                           {children}
                       </Main>
                   </Card>
               </Page>
           </MDXProvider>;
};

export default MdxPage;
