import Metadata from "./metadata.jsx";
import PostBreadcrumbs from "./post-breadcrumbs.jsx";
import PostPaging from "./post-paging.jsx";
import Footer from "../../components/footer.tsx";
import Nav from "../../components/nav.jsx";

export const Sidebar = post => {
    const {
        category, title, childrenLink
    } = post;

    return <>
               <Nav heading={<h2>Paging</h2>}>
                   <PostPaging childrenLink={childrenLink} />
               </Nav>
               <Footer heading={<h2>Metadata</h2>}>
                   <Metadata {...post} />
               </Footer>
               <Nav heading={<h2>Breadcrumbs</h2>}>
                   <PostBreadcrumbs category={category} title={title} />
               </Nav>
           </>;
};

export default Sidebar;
