import { graphql, useStaticQuery } from "gatsby";

export const useIndexAll = () => useStaticQuery(graphql`
query UseIndexAll {
  indexAll {
    index {
      id
    }
  }
}`).indexAll.index.id;

export default useIndexAll;
