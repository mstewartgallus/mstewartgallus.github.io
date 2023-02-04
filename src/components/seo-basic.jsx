import * as React from "react";
import { useSiteMetadata } from '../hooks/use-site-metadata.js';
import favicon from '../images/favicon.svg';

const Opengraph = ({description, url, title}) => {
    const site = useSiteMetadata();
    description ??= site.description;
    return <>
               <meta name="og:site_name" content={site.title} />
               <meta property="og:title" content={title} />
               <meta property="og:image" content={favicon} />
               <meta property="og:url" content={url} />
               <meta property="og:description" content={description} />
           </>;
};

export const SeoBasic = ({description, url, title}) => {
    const site = useSiteMetadata();
    description ??= site.description;
    return <>
               <link rel="canonical" href={url} />
               <meta name="description" content={description} />
               <Opengraph />
           </>;
};

export default SeoBasic;
