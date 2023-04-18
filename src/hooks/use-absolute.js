import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

const useMetadata = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

export const useAbsolute = pathname => {
    const raw = useMetadata();
    return useMemo(() => {
        const site = raw.site.siteMetadata;
        return String(new URL(pathname, site.siteUrl));
    }, [raw, pathname]);
};
