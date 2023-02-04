import * as React from "react";
import useSiteMetadata from "../hooks/use-site-metadata.js";
import separator from "../utils/separator.js";

export const Title = ({ children }) => {
    const site = useSiteMetadata();

    const array = React.Children.toArray(children);
    array.push(site.title);
    const fullTitle = array.join(separator);

    return <title>{fullTitle}</title>;
};

export default Title;
