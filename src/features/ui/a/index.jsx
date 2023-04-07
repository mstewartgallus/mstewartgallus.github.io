import { memo, forwardRef } from "react";
import { Link } from "gatsby";
import { a as aClass } from "./a.module.css";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const fallback = (siteUrl, href, props) => {
    const { origin, hash } = new URL(href, siteUrl);
    return hash || origin !== siteUrl || !href || props.target || props.download;
};

const A = ({children, className = '', href, ...props}, ref) => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    className = `${aClass} ${className}`;
    return fallback(siteUrl, href, props) ?
        <Link
            className={className}
            innerRef={ref}
            to={href}
            {...props}>{children}</Link> :
    <a
        className={className}
        ref={ref}
        href={href}
        {...props}>{children}</a>;
};

const ARef = memo(forwardRef(A));

export { ARef as A, ARef as default };
