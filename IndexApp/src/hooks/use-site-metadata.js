import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}`);

export const useSiteMetadata = () => useSiteMetadataRaw().site.siteMetadata;
