import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const usePostListRaw = () => useStaticQuery(graphql`
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
}`);

export const usePostList = () => {
    const raw = usePostListRaw();
    return React.useMemo(() =>
        Object.fromEntries(
            raw.allLink.group
                .map(({ index, nodes }) =>
                    [index, nodes.map(l => l.post)])),
        [raw]);
}

export default usePostList;
