import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

export const useOrigin = () => {
    const metadata = useSiteMetadataRaw();
    return metadata.site.siteMetadata.siteUrl;
};
