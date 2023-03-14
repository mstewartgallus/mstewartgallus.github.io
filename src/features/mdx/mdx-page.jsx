import { A, BreadcrumbList, Main, Nav, Page } from "../../features/ui";

const Sidebar = ({ title }) =>
      <>
          <Nav heading={<h2>Breadcrumbs</h2>}>
              <BreadcrumbList>
                  <li><A href="/">Home</A></li>
                  <li aria-current="page"><cite>{title}</cite></li>
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
