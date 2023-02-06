import { graphql, useStaticQuery } from "gatsby";

export const usePostList = () => {
    const group = useStaticQuery(graphql`
query {
  allLink(sort: {date: DESC}) {
    group(field: {label: SELECT}) {
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
    const entries = group.map(({ label, nodes }) =>
        [label, nodes.map(l => l.post.metadata)]);
    return Object.fromEntries(entries);
}

export default usePostList;
