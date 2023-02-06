import { graphql, useStaticQuery } from "gatsby";

export const usePostList = () => {
    const group = useStaticQuery(graphql`
query {
  allLink(sort: {content: {date: DESC}}) {
    group(field: {content: {index: {id: SELECT}}}) {
      index: fieldValue
      nodes {
        content {
          post {
            metadata {
              title
              slug
            }
          }
        }
      }
    }
  }
}`).allLink.group;
    const entries = group.map(({ index, nodes }) =>
        [index, nodes.map(l => l.content.post.metadata)]);
    return Object.fromEntries(entries);
}

export default usePostList;
