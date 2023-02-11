import * as React from "react";
import flatten from "../utils/flatten.js";
import useOpenGraphBlog from '../hooks/use-opengraph-blog.js';

const Open = props => {
    const json = useOpenGraphBlog(props);
    return flatten(json).map(([k, v]) =>
        <meta key={k} property={k} content={v} />);
};


export const SeoPostHead = props => {
    const {author} = props;
    return <>
               <link rel="author" href={author.url} />
               <meta name="author" content={author.name} />
               <Open {...props}/>
           </>;
};

export default SeoPostHead;
