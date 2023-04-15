import { Suspense, lazy, forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

const ALocal = lazy(() => import("./a-local"));

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

const useFail = props => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { href, target, download } = props;

    const { origin, hash } = new URL(href ?? '', siteUrl);

    return !href || origin !== siteUrl || hash || target || download;
};

export const A = forwardRef(function A(props, ref) {
    const fail = useFail(props);
    return fail ? <a {...props} ref={ref} /> : <ALocalLazy {...props} ref={ref} />;
});

export default A;
