import * as React from "react";
import flatten from "../utils/flatten.js";
import { useSiteMetadata } from '../hooks/use-site-metadata.js';
import favicon from '../images/favicon.svg';

const Open = ({description, url, title}) => {
    const site = useSiteMetadata();
    const json = {
        og: {
            site_name: site.title,
            title: title,
            image: favicon,
            url: url,
            description: description ?? site.description
        }
    };
    const meta = flatten(json);
    return meta.map(([k, v]) =>
        <meta key={k} property={k} content={v} />);
};

export const SeoBasic = props => {
    const {description, url} = props;
    const site = useSiteMetadata();
    return <>
               <link rel="canonical" href={url} />
               <meta name="description" content={description ?? site.description} />
               <Open {...props} />
           </>;
};

export default SeoBasic;
