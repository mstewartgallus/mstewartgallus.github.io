import * as React from "react";
import { useSiteMetadata } from '../hooks/use-site-metadata.js';
import favicon from '../images/favicon.svg';

export const SeoBasic = ({description, url, title}) => {
    const site = useSiteMetadata();

    description ??= site.description;

    return <>
               <link rel="canonical" href={url} />
               <meta name="description" content={description} />
               <meta name="og:site_name" content={site.title} />
               <meta property="og:title" content={title} />
               <meta property="og:image" content={favicon} />
               <meta property="og:url" content={url} />
               <meta property="og:description" content={description} />
           </>;
};

export default SeoBasic;
