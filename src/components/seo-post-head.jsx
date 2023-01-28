import * as React from "react";

export const SeoPostHead = ({author, date, category, tags, people, places}) =>
<>
    <link rel="author" href={author.url} />
    <meta name="author" content={author.name} />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content={author.name} />
    <meta property="og:article:published_time" content={date} />
    <meta property="og:article:section" content={category} />
    <meta property="og:profile" content={author.name} />
    <meta property="og:profile:username" content={author.name} />
    {
        [...people, ...tags, ...places].map(tag =>
            <meta key={tag} property="og:article:tag" content={tag} />
        )
    }
</>;

export default SeoPostHead;
