import { useMemo } from "react";
import { useSearchURL } from "@features/route";

export const useBreadcrumbList = ({
    title, category, slug
}) => {
    const item = useSearchURL({ category: [category] });
    return useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "/"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": category,
            "item": item
        },{
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": slug
        }]
    }), [item, title, slug, category]);
};
