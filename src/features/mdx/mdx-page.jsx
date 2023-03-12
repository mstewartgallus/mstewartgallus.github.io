import { A } from "../../features/ui";
import BreadcrumbList from "../../components/breadcrumb-list";
import Main from "../../components/main";
import Nav from "../../components/nav.jsx";
import Page from "../../components/page";

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
