import * as React from "react";
import JsonLd from "./json-ld.jsx";

const blogPosting = ({
    title, date, author, category, tags, people, places
}) => {
      return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "datePublished": date,
          "author": [{
              "@type": "Person",
              "name": author.name,
              "url": author.url
          }],
          "articleSection": category,
          "keywords": tags,
          "character": people,
          "contentLocation": places
      };
};

const breadcrumbs = ({
    title, category, slug
}) => {
    const uricat = encodeURIComponent(category);
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "/"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": category,
            "item": `/search/?category=${uricat}`
        },{
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": slug
        }]
    };
};

export const SeoPostFoot = props =>
<>
    <JsonLd srcdoc={breadcrumbs(props)}  />
    <JsonLd srcdoc={blogPosting(props)}  />
</>;

export default SeoPostFoot;
