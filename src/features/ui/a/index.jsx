import { memo, forwardRef, useCallback } from "react";
import { Link } from "gatsby";
import { navigate } from "../../../features/util";
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

const MyLink = ({children, href, ...props}, ref) => {
    const onClick = useCallback(e => {
        e.preventDefault();

        navigate(href);
    }, [href]);
    return <Link innerRef={ref}
                 to={href}
                 onClick={onClick}
                 {...props}>{children}</Link> ;
};

const MyLinkRef = forwardRef(MyLink);

const A = ({children, className = '', href, ...props}, ref) => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    className = `${aClass} ${className}`;
    return fallback(siteUrl, href, props) ?
        <a
            className={className}
            ref={ref}
            href={href}
            {...props}>{children}</a> :
    <MyLinkRef
        className={className}
        ref={ref}
        href={href}
        {...props}>{children}</MyLinkRef> ;
};

const ARef = memo(forwardRef(A));

export { ARef as A, ARef as default };
