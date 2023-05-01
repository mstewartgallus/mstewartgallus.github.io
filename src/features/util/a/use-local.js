import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

export const useLocal = ({ href, target, download }) => {
    const metadata = useSiteMetadataRaw();
    const siteUrl = metadata.site.siteMetadata.siteUrl;
    return useMemo(() => {
        const { origin, hash } = new URL(href ?? '', siteUrl);

        if (hash || target || download) {
            return false;
        }

        return href && origin === siteUrl;
    }, [siteUrl, href, target, download]);
};
