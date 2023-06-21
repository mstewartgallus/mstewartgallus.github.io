export const useOpenGraphBlog = ({
    author, date, description, url, title,
    category, people, tags, places
}) => ({
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
            }
        ]
    }
});
