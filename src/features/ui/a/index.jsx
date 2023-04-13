import { Suspense, lazy, forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { a as aClass } from "./a.module.css";

const ALocal = lazy(() => import("../a-local"));

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const ALocalLazy = forwardRef(function ALocalLazy(props, ref) {
    return <Suspense
               fallback={
                   <a {...props} ref={ref} />
               }
           >
               <ALocal {...props} ref={ref} />
           </Suspense>;
});

const AAll = forwardRef(function AAll(props, ref) {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { href, target, download } = props;

    const { origin, hash } = new URL(href ?? '', siteUrl);

    const fail = !href || origin !== siteUrl || hash || target || download;

    if (fail) {
        return <a {...props} ref={ref} />;
    };

    return <ALocalLazy {...props} ref={ref} />;
});

export const A = forwardRef(function A(props, ref) {
    const className = [aClass, props.className ?? ''].join(' ');
    return <AAll {...props} className={className} ref={ref} />;
});

export default A;
