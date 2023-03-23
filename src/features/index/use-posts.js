import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const usePostsRaw = () => useStaticQuery(graphql`
query UsePosts {
  allLink(sort: {post: {date: DESC}}, filter: {category: {eq: ""}}) {
    nodes {
      post {
        title
        slug
      }
    }
  }
}`);

export const usePosts = () => {
    const raw = usePostsRaw();
    return useMemo(() => raw.allLink.nodes.map(p => p.post), [raw]);
}

export default usePosts;
