import { A, BreadcrumbList, BreadcrumbItem } from "../../features/ui";
import { useSearchURL } from "../../features/route";

export const PostBreadcrumbs = ({category, title}) => {
    const cat = useSearchURL({ category: [category] });
    return <BreadcrumbList>
               <BreadcrumbItem>
                   <A href="/">Home</A>
               </BreadcrumbItem>
               <BreadcrumbItem>
                   <A rel="tag" href={cat}>{category}</A>
               </BreadcrumbItem>
               <BreadcrumbItem>
                   <A role="link" aria-disabled="true" aria-current="page">
                       <cite>{title}</cite>
                   </A>
               </BreadcrumbItem>
           </BreadcrumbList>;
};

export default PostBreadcrumbs;
