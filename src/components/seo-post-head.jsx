import * as React from "react";

export const SeoPostHead = ({date, category, tags, people, places}) =>
<>
    <meta property="og:type" content="article" />
    <meta property="og:article:published_time" content={date} />
    {
        [category, ...people, ...tags, ...places].map(tag =>
            <meta key={tag} property="og:article:tag" content={tag} />
        )
    }
</>;

export default SeoPostHead;
