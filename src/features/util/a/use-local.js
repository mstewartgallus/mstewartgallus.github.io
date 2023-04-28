import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

export const useLocal = props => {
    const metadata = useSiteMetadataRaw();
    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { href, target, download } = props;
    const { origin, hash } = new URL(href ?? '', siteUrl);

    if (hash || target || download) {
        return false;
    }

    return href && origin === siteUrl;
};
