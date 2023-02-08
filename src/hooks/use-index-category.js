import { graphql, useStaticQuery } from "gatsby";

export const useIndexCategory = () => {
    const indices = useStaticQuery(graphql`
query UseIndexCategory {
  allIndexCategory(sort: {category: DESC}) {
    nodes {
      index {
        id
      }
      category
    }
  }
}`).allIndexCategory.nodes;
    return Object.fromEntries(indices.map(({index: { id }, category}) => [category, id]));
};

export default useIndexCategory;
