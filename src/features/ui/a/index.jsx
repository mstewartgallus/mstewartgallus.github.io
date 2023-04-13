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

const ALocalLazy = forwardRef(function ALocalLazy({children, onClick, ...props}, ref) {
    return <Suspense
               fallback={
                   <a {...props} ref={ref}>
                       {children}
                   </a>
               }
           >
               <ALocal {...props} ref={ref}>
                   {children}
               </ALocal>
           </Suspense>;
});

const AAll = forwardRef(function AAll({children, ...props}, ref) {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { href, target, download } = props;

    const { origin, hash } = new URL(href ?? '', siteUrl);

    const fail = !href || origin !== siteUrl || hash || target || download;

    if (fail) {
        return <a {...props} ref={ref}>
                   {children}
               </a>;
    };

    return <ALocalLazy {...props} ref={ref}>
               {children}
           </ALocalLazy>;
});

export const A = forwardRef(function A({children, className = '', ...props}, ref) {
    className = [aClass, className].join(' ');
    return <AAll {...props} className={className} ref={ref}>
               {children}
           </AAll>;
});

export default A;
