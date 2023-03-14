import { A, BreadcrumbList, BreadcrumbItem, Main, Nav, Page } from "../../features/ui";

const Sidebar = ({ title }) =>
      <>
          <Nav heading={<h2>Breadcrumbs</h2>}>
              <BreadcrumbList>
                  <BreadcrumbItem><A href="/">Home</A></BreadcrumbItem>
                  <BreadcrumbItem>
                      <A role="link" aria-disabled="true" aria-current="page">{title}</A>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Nav>
      </>;

export const MdxPage = ({
    children,
    location: { pathname },
    pageContext
}) => {
    const { frontmatter: { title = pathname }} = pageContext;
    return <Page
               sidebar={<Sidebar title={title} />}>
               <Main heading={<h1 tabIndex="-1">{title}</h1>}>
                   {children}
               </Main>
           </Page>;
};

export default MdxPage;
