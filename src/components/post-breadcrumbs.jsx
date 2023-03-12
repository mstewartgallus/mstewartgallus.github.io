import A from "./a.tsx";
import BreadcrumbList from "./breadcrumb-list";
import LinkCategory from "./link-category.jsx";

export const PostBreadcrumbs = ({category, title}) =>
<BreadcrumbList>
    <li><A href="/">Home</A></li>
    <li><LinkCategory rel="tag" category={category} /></li>
    <li aria-current="page"><cite>{title}</cite></li>
</BreadcrumbList>;

export default PostBreadcrumbs;
