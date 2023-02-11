import { graphql, useStaticQuery } from "gatsby";

const useIndexAllRaw = () => useStaticQuery(graphql`
query UseIndexAll {
  indexAll {
    index {
      id
    }
  }
}`);

export const useIndexAll = () => useIndexAllRaw().indexAll.index.id;

export default useIndexAll;
