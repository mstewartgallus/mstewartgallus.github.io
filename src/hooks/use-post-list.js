import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const usePostListRaw = () => useStaticQuery(graphql`
query UsePostList {
  allLink(sort: {post: {date: DESC}}) {
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
    return React.useMemo(() =>
        new Map(
            raw.allLink.group
                .map(({ category, nodes }) =>
                    [category, nodes.map(l => l.post)])),
        [raw]);
}

export default usePostList;
