import { A, BreadcrumbList, BreadcrumbItem, Cite } from "../../features/ui";
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
                   <A aria-current="page">
                       <Cite>{title}</Cite>
                   </A>
               </BreadcrumbItem>
           </BreadcrumbList>;
};

export default PostBreadcrumbs;
