import { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { separator } from "../utils/separator.js";

const useSiteTitle = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}`);

export const useTitle = (...title) => {
    const results = useSiteTitle();
    return useMemo(() => {
        const { title: siteTitle } = results.site.siteMetadata;
        return [...title, siteTitle].join(separator);
    }, [results, title]);
};
