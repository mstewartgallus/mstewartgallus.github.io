import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

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
    return React.useMemo(() => {
        const site = raw.site.siteMetadata;
        return new URL(pathname, site.siteUrl).toString();
    }, [raw, pathname]);
};

export default useAbsolute;
