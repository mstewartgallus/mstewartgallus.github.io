import { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useClick } from "@features/util";
import { usePrefetch } from "./use-prefetch";
import { useHover } from "./use-hover";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const AClient = ({children, ...props}, ref) => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { origin, pathname, search, hash } = new URL(props.href ?? '', siteUrl);
    const fail = !props.href || hash || origin !== siteUrl || props.target || props.download;
    const url = pathname + search;

    const prefetchRef = usePrefetch(url);
    const hoverRef = useHover(url);

    const onClick = useClick();

    return <a onClick={fail ? null : onClick}
              {...props}
              ref={elem => {
                  hoverRef.current = fail ? null : elem;
                  prefetchRef.current = fail ? null : elem;

                  if (ref) {
                      ref.current = elem;
                  }
              }}>{children}</a>;
};

const ARef = forwardRef(AClient);

export { ARef as AClient, ARef as default };
