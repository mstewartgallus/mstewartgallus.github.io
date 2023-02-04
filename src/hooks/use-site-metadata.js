import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}`).site.siteMetadata;

export default useSiteMetadata;
