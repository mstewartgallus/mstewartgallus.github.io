import { graphql, useStaticQuery } from "gatsby";

export const usePostList = () => {
    const group = useStaticQuery(graphql`
query {
  allLink(sort: {date: DESC}) {
    group(field: {index: {label: SELECT}}) {
      label: fieldValue
      nodes {
        post {
          metadata {
            title
            slug
          }
        }
      }
    }
  }
}`).allLink.group;
    // FIXME
    // Gross hack for now
    // Only one index of ALL for now
    const indices = group.map(col => col.nodes.map(l => l.post.metadata));
    return indices[0];
}
