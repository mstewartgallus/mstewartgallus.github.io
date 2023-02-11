import * as React from "react";
import flatten from "../utils/flatten.js";

const Open = ({author, date, category, tags, people, places}) =>
    flatten({
            og: {
                type: "article",
                article: {
                    author: author.name,
                    published_time: date,
                    section: category,
                    tag: [...people, ...tags, ...places]
                },
                profile: [
                    author.name,
                    {
                        username: author.name
                    }]
            }
    }).map(([k, v]) =>
        <meta key={k} property={k} content={v} />);


export const SeoPostHead = props => {
    const {author} = props;
    return <>
               <link rel="author" href={author.url} />
               <meta name="author" content={author.name} />
               <Open {...props}/>
           </>;
};

export default SeoPostHead;
