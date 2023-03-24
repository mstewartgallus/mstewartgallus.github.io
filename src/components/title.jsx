import { Children, useMemo } from "react";
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

const useTitle = title => {
    const results = useSiteTitle();
    return useMemo(() => {
        const { title: siteTitle } = results.site.siteMetadata;
        return [...title, siteTitle].join(separator);
    }, [results, title]);
};

export const Title = ({ children }) => {
    const fullTitle = useTitle(Children.toArray(children));
    return <title>{fullTitle}</title>;
};

export default Title;
