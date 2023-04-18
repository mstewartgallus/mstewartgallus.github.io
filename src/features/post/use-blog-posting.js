export const useBlogPosting = ({
    title, date, author, category, tags, people, places
}) => ({
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
});
