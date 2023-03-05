import A from "../components/a.tsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import Footer from "../components/footer.tsx";
import LinkCategory from "../components/link-category.jsx";
import Metadata from "../components/metadata.jsx";
import Nav from "../components/nav.jsx";
import Paging from "../components/paging.jsx";
import useIndexAll from "../hooks/use-index-all.js";

const paging = ({
    index: { id: index },
    previous, next
}) => [index, {
    previous: previous?.post,
    next: next?.post
}];

const pagingOfLinks = childrenLink =>
      Object.fromEntries(childrenLink.map(paging));

export const PostSidebar = post => {
    const {
        category, title, childrenLink
    } = post;
    const indexAll = useIndexAll();

    const paging = pagingOfLinks(childrenLink);

    return <>
               <Nav heading={<h2>Paging</h2>}>
                   <Paging {...paging[indexAll]} />
               </Nav>
               <Footer heading={<h2>Metadata</h2>}>
                   <Metadata {...post} />
               </Footer>
               <Nav heading={<h2>Breadcrumbs</h2>}>
                   <BreadcrumbList>
                       <li><A href="/">Home</A></li>
                       <li><LinkCategory rel="tag" category={category} /></li>
                       <li aria-current="page"><cite>{title}</cite></li>
                   </BreadcrumbList>
               </Nav>
           </>;
};

export default PostSidebar;
