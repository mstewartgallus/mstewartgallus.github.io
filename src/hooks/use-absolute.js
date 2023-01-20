import { graphql, useStaticQuery } from "gatsby";

const useMetadata = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`).site.siteMetadata;

export const useAbsolute = (pathname) => {
    const site = useMetadata();
    return new URL(pathname, site.siteUrl).toString();
};
