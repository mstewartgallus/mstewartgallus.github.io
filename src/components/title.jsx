import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

export const Title = ({ children }) => {
    let title = useSiteMetadata().title;
    if (children !== null) {
        title = `${children}\u2009\u2014\u2009${title}`;
    }
    return <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        </>;
};

export default Title;
