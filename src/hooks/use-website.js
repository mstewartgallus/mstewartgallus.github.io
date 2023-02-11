import * as React from "react";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";

export const useWebsite = () => {
    const site = useSiteMetadata();
    const search = useAbsolute('/search');
    const index = useAbsolute('/');
    return React.useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": site.title,
        "description": site.description,
        "url": index,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${search}?s={s}`
            },
            "query-input": "required name=s"
        }
    }), [site, search, index]);
};

export default useWebsite;
