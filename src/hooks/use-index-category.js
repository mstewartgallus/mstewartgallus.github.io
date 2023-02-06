import { graphql, useStaticQuery } from "gatsby";

export const useIndexCategory = () => {
    const indices = useStaticQuery(graphql`
query {
  allIndexCategory(sort: {category: DESC}) {
    nodes {
      id
      category
    }
  }
}`).allIndexCategory.nodes;
    return Object.fromEntries(indices.map(({id, category}) => [category, id]));
};

export default useIndexCategory;
