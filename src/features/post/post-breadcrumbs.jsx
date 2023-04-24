import { useSearchURL } from "@features/route";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA, Cite } from "@features/ui";

export const PostBreadcrumbs = ({category, title}) => {
    const cat = useSearchURL({ category: [category] });
    return <BreadcrumbList>
               <BreadcrumbA href="/">Home</BreadcrumbA>
               <BreadcrumbA rel="tag" href={cat}>{category}</BreadcrumbA>
               <BreadcrumbItem>
                   <Cite aria-current="page">{title}</Cite>
               </BreadcrumbItem>
           </BreadcrumbList>;
};
