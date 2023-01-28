import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const sep = "\u2009\u2014\u2009";

const useTitle = title => {
    const site = useSiteMetadata();
    const siteTitle = site.title;

    if (title === null || title === '') {
        return siteTitle;
    }
    return`${title}${sep}${siteTitle}`;
};

export const Title = ({ children }) => {
    const fullTitle = useTitle(children);
    return <title>{fullTitle}</title>;
};

export default Title;
