import { useMemo } from "react";
import { useLocation as useReachLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

export const useLocation = () => {
    const raw = useSiteMetadataRaw();
    const location = useReachLocation();
    return useMemo(() => {
        const siteUrl = raw.site.siteMetadata.siteUrl;
        const { origin = siteUrl, pathname, hash, search } = location;
        return `${origin}${pathname}${search}${hash}`;
    }, [raw, location]);
};

export default useLocation;
