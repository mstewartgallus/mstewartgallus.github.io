import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const usePostListRaw = () => useStaticQuery(graphql`
query UsePostList {
  allLink(sort: {post: {date: DESC}}, filter: {category: {ne: ""}}) {
    group(field: {category: SELECT}) {
      category: fieldValue
      nodes {
        post {
          title
          slug
        }
      }
    }
  }
}`);

export const usePostList = () => {
    const raw = usePostListRaw();
    return useMemo(() =>
        Object.fromEntries(
            raw.allLink.group
                .map(({ category, nodes }) =>
                    [category, nodes.map(l => l.post)])),
        [raw]);
}
