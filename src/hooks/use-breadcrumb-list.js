import * as React from "react";
import search from "../utils/search.js";

export const useBreadcrumbList = ({
    title, category, slug
}) => React.useMemo(() => ({
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
        "item": search(['category', category])
    },{
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": slug
    }]
}), [title, slug, category]);

export default useBreadcrumbList;
