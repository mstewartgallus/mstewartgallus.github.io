import Footer from "../components/footer.tsx";
import Metadata from "../components/metadata.jsx";
import Nav from "../components/nav.jsx";
import PostBreadcrumbs from "../components/post-breadcrumbs.jsx";
import PostPaging from "../components/post-paging.jsx";

export const PostSidebar = post => {
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

export default PostSidebar;
