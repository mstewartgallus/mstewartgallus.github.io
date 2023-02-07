import { graphql, useStaticQuery } from "gatsby";

export const usePostTags = () => {
    const posts = useStaticQuery(graphql`
query {
  allPost {
     place: distinct(field: {places: SELECT})
     tags: distinct(field: {tags: SELECT})
     people: distinct(field: {people: SELECT})
     category: distinct(field: {category: SELECT})
  }
}`).allPost;
    return posts;
};

export default usePostTags;
