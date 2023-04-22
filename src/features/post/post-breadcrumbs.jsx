import { useSearchURL } from "@features/route";
import { A, BreadcrumbList, BreadcrumbItem, ClickTrap, Cite } from "@features/ui";

export const PostBreadcrumbs = ({category, title}) => {
    const cat = useSearchURL({ category: [category] });
    return <BreadcrumbList>
               <BreadcrumbItem>
                   <A href="/">Home<ClickTrap /></A>
               </BreadcrumbItem>
               <BreadcrumbItem>
                   <A rel="tag" href={cat}>{category}<ClickTrap /></A>
               </BreadcrumbItem>
               <BreadcrumbItem>
                   <Cite aria-current="page">{title}</Cite>
               </BreadcrumbItem>
           </BreadcrumbList>;
};
