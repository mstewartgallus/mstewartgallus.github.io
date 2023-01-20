import * as React from "react";
import { useSiteMetadata } from '../hooks/use-site-metadata.js';
import favicon from '../assets/favicon.svg';

const author = {
    name: "Molly Stewart-Gallus",
    url: "/about"
};

export const SeoBasic = ({url}) => {
    const site = useSiteMetadata();

    return <>
               <link rel="canonical" href={url} />
               <meta name="description" content={site.description} />
               <meta name="og:site_name" content={site.title} />
               <meta property="og:image" content={favicon} />
               <meta property="og:url" content={url} />
               <meta property="og:description" content={site.description} />
               <link rel="author" href={author.url} />
               <meta name="author" content={author.name} />
               <meta property="og:profile" content={author.name} />
               <meta property="og:profile:username" content={author.name} />
           </>;
};

export default SeoBasic;
