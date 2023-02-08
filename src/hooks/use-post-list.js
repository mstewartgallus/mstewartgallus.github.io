import { graphql, useStaticQuery } from "gatsby";

export const usePostList = () => {
    const group = useStaticQuery(graphql`
query UsePostList {
  allLink(sort: {post: {date: DESC}}) {
    group(field: {index: {id: SELECT}}) {
      index: fieldValue
      nodes {
        post {
          title
          slug
        }
      }
    }
  }
}`).allLink.group;
    const entries = group.map(({ index, nodes }) =>
        [index, nodes.map(l => l.post)]);
    return Object.fromEntries(entries);
}

export default usePostList;
