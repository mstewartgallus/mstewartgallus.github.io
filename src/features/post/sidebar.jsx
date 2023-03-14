import { Card, Footer, Nav } from "../../features/ui";
import Metadata from "./metadata.jsx";
import PostBreadcrumbs from "./post-breadcrumbs.jsx";
import PostPaging from "./post-paging.jsx";

export const Sidebar = post => {
    const {
        category, title, childrenLink
    } = post;

    return <>
               <Card>
                   <Nav heading={<h2>Paging</h2>}>
                       <PostPaging childrenLink={childrenLink} />
                   </Nav>
               </Card>
               <Card>
                   <Footer heading={<h2>Metadata</h2>}>
                       <Metadata {...post} />
                   </Footer>
               </Card>
               <Card>
                   <Nav heading={<h2>Breadcrumbs</h2>}>
                       <PostBreadcrumbs category={category} title={title} />
                   </Nav>
               </Card>
           </>;
};

export default Sidebar;
