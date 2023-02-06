import { graphql, useStaticQuery } from "gatsby";

export const useIndexAll = () => useStaticQuery(graphql`
query {
  indexAll {
    id
  }
}`).indexAll.id;

export default useIndexAll;
