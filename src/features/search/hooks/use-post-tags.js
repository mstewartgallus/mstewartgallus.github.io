import { graphql, useStaticQuery } from "gatsby";

const usePostTagsRaw = () => useStaticQuery(graphql`
query {
  allPost {
     place: distinct(field: {places: SELECT})
     tags: distinct(field: {tags: SELECT})
     people: distinct(field: {people: SELECT})
     category: distinct(field: {category: SELECT})
  }
}`);

export const usePostTags = () => usePostTagsRaw().allPost;

export default usePostTags;