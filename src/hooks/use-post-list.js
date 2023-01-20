import { graphql, useStaticQuery } from "gatsby";

export const usePostList = () => useStaticQuery(graphql`
query {
  allPost(sort: {date: DESC}) {
    nodes {
      metadata {
        title
        slug
     }
   }
  }
}`).allPost.nodes.map(n => n.metadata);
