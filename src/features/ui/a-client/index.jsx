import { useRef, useEffect, forwardRef } from "react";
import { graphql, useStaticQuery, prefetchPathname, navigate } from "gatsby";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const aborts = new WeakMap();
const urls = new WeakMap();

const prefetch = elem => {
    const url = urls.get(elem);
    aborts.set(elem, prefetchPathname(url));
};

const abort = elem => {
    aborts.get(elem)?.abort();
    aborts.delete(elem);
};

const onObserve = entry => {
    const { target, isIntersecting, intersectionRatio } = entry;

    const near = isIntersecting || intersectionRatio > 0;
    if (near) {
        prefetch(target);
    } else {
        abort(target);
    }
};

let prefetcher = null;
const getPrefetcher = () => {
    if (prefetcher) {
        return prefetcher;
    }
    if (!window) {
        return null;
    }

    const { IntersectionObserver} = window;
    if (!IntersectionObserver) {
        return null;
    }

    prefetcher = new IntersectionObserver(entries => {
        for (const entry of entries) {
            onObserve(entry);
        }
    });
    return prefetcher;
};

const bubble = e => {
    while (e && (e.tagName !== 'A' || !e.href)) {
        e = e.parentElement;
    }
    return e;
};

const onClick = async e => {
    const { target, altKey, metaKey, shiftKey, ctrlKey, button } = e;
    if (button !== 0) {
        return;
    }

    if (altKey || metaKey || shiftKey || ctrlKey) {
        return;
    }

    e.preventDefault();

    const { href } = bubble(target);
    const { pathname, search } = new URL(href, window.location);

    const url = pathname + search;

    await navigate(url);
};

const usePrefetch = url => {
    const ref = useRef();
    useEffect(() => {
        const pre = getPrefetcher();
        if (!pre) {
            return;
        }

        const { current } = ref;
        if (!current) {
            return;
        }

        urls.set(current, url);
        pre.observe(current);
        return () => {
            pre.unobserve(current);
            urls.delete(current);
        };
    }, [url]);
    return ref;
};

const useHover = url => {
    const ref = useRef();
    useEffect(() => {
        const { current } = ref;
        if (!current) {
            return;
        }

        // FIXME shouldn't bypass stuff
        const abort = new AbortController();
        const { signal } = abort;
        current.addEventListener('mouseenter',
                                 () => window.___loader.hovering(url),
                                 { passive: true, signal });
        return () => abort.abort();
    }, [url]);
    return ref;
};

const AClient = ({children, ...props}, ref) => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { origin, pathname, search, hash } = new URL(props.href ?? '', siteUrl);
    const fail = !props.href || hash || origin !== siteUrl || props.target || props.download;
    const url = pathname + search;

    const prefetchRef = usePrefetch(url);
    const hoverRef = useHover(url);

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
