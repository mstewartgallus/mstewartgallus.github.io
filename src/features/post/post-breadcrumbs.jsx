import { A, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import LinkCategory from "./link-category.jsx";

export const PostBreadcrumbs = ({category, title}) =>
<BreadcrumbList>
    <BreadcrumbItem><A href="/">Home</A></BreadcrumbItem>
    <BreadcrumbItem><LinkCategory rel="tag" category={category} /></BreadcrumbItem>
    <BreadcrumbItem>
        <A role="link" aria-disabled="true" aria-current="page">
            <cite>{title}</cite>
        </A>
    </BreadcrumbItem>
</BreadcrumbList>;

export default PostBreadcrumbs;
