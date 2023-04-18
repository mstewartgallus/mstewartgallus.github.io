import { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ALocal } from "./a-local";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const useFail = props => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { href, target, download } = props;

    const { origin, hash } = new URL(href ?? '', siteUrl);

    return !href || origin !== siteUrl || hash || target || download;
};

const A = (props, ref) => {
    const fail = useFail(props);
    const A = fail ? 'a' : ALocal;
    return <A {...props} ref={ref} />;
};

const ARef = forwardRef(A);

export { ARef as A, ARef as default };
