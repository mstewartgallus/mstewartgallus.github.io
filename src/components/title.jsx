import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const sep = "\u2009\u2014\u2009";

export const Title = ({ title }) => {
    let siteTitle = useSiteMetadata().title;

    let str = siteTitle;
    if (title !== null || title !== '') {
        str = `${title}${sep}${siteTitle}`;
    }
    return <title>{str}</title>;
};

export default Title;
