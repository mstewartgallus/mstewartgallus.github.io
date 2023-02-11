import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const useIndexCategoryRaw = () => useStaticQuery(graphql`
query UseIndexCategory {
  allIndexCategory(sort: {category: DESC}) {
    nodes {
      index {
        id
      }
      category
    }
  }
}`);

export const useIndexCategory = () => {
    const raw = useIndexCategoryRaw();
    return React.useMemo(() => {
        const indices = raw.allIndexCategory.nodes;
        return Object.fromEntries(indices.map(({index: { id }, category}) => [category, id]))
    }, [raw]);
};

export default useIndexCategory;
