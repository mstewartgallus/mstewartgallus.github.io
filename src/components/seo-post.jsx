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

export const SeoPost = props => {
    const {date, category, tags, people, places} = props;
// {{ page.date | date: "%Y-%m-%d" }}"
 // <meta property="og:article:author" content="{{ author.name | escape }}" />
    const allTags = [category, ...people, ...tags, ...places];
    return <>
               <meta property="og:type" content="article" />
               <meta property="og:article:published_time" content={date} />
               {
                   allTags.map(tag =>
                       <meta property="og:article:tag" content={tag} />
                   )}
               <JsonLd srcdoc={breadcrumbs(props)}  />
               <JsonLd srcdoc={blogPosting(props)}  />
           </>;
};

export default SeoPost;
