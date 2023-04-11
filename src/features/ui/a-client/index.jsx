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

const fallback = (siteUrl, props) => {
    if (!props.href) {
        return true;
    }

    const { origin, hash } = new URL(props.href, siteUrl);
    return hash || origin !== siteUrl || props.target || props.download;
};

const aborts = new WeakMap();

const prefetch = elem => {
    const { pathname, search } = new URL(elem.href, window.location);

    const url = pathname + search;
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

const onMouseEnter = e => {
    const { target } = e;
    const { href } = bubble(target);
    const { pathname, search } = new URL(href, window.location);
    // FIXME
    window.___loader.hovering(pathname + search);
};

const AClient = ({children, ...props}, ref) => {
    const theRef = useRef();
    ref ??= theRef;

    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const fail = fallback(siteUrl, props);

    useEffect(() => {
        if (fail) {
            return;
        }

        const pre = getPrefetcher();
        if (!pre) {
            return;
        }

        const { current } = ref;
        if (!current) {
            return;
        }
        pre.observe(current);
        return () => pre.unobserve(current);
    }, [ref, fail]);

    useEffect(() => {
        if (fail) {
            return;
        }

        const { current } = ref;
        if (!current) {
            return;
        }

        const abort = new AbortController();
        const { signal } = abort;
        current.addEventListener('mouseenter',
                                 onMouseEnter,
                                 { passive: true, signal } );
        return () => abort.abort();
    }, [ref, fail]);

    return <a onClick={fail ? null : onClick}
              {...props}
              ref={ref}>{children}</a>;
};

const ARef = forwardRef(AClient);

export { ARef as AClient, ARef as default };