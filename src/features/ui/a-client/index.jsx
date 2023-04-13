import {
    forwardRef,
    useRef,
    useCallback,
    useEffect, useReducer, useTransition
} from "react";
import { prefetchPathname, graphql, useStaticQuery } from "gatsby";
import { useClick } from "@features/util";
import { observe } from "./use-intersect";

const useSiteMetadataRaw = () => useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`);

const initState = {
    mouseover: false,
    focus: false,
    near: false
};

const reducer = (state, action) => {
    switch (action) {
    case 'near':
        return { ...state, near: true };
    case 'far':
        return { ...state, near: false };

    case 'mouseover':
        return { ...state, mouseover: true };
    case 'mouseout':
        return { ...state, mouseover: false };

    case 'focus':
        return { ...state, focus: true };
    case 'blur':
        return { ...state, focus: false };

    default: return state;
    }
};

const useHover = url => useEffect(() => {
    if (!url) {
        return;
    }
    window.___loader.hovering(url);
}, [url]);

const usePrefetchPathname = url => useEffect(() => {
    if (!url) {
        return;
    }
    const abort = prefetchPathname(url);
    return () => abort.abort();
}, [url]);

const AClient = ({
    children,
    onClick,
    onFocus, onBlur,
    onMouseOver, onMouseOut,
    ...props
}, ref) => {
    const metadata = useSiteMetadataRaw();

    const siteUrl = metadata.site.siteMetadata.siteUrl;

    const { origin, pathname, search, hash } = new URL(props.href ?? '', siteUrl);
    const fail = !props.href || hash || origin !== siteUrl || props.target || props.download;
    const url = fail ? null : pathname + search;

    const onClickNavigate = useClick();

    const onClickWrapper = useCallback(e => {
        onClick?.(e);
        onClickNavigate?.(e);
    }, [onClick, onClickNavigate]);


    // Do this sort of silliness to integrate with React's native
    // scheduling as much as possible and appropriately idle and not
    // block threads.

    const [, startTransition] = useTransition();
    const [{ mouseover, focus, near }, dispatch] = useReducer(reducer, initState);

    const onMouseOverWrapper = useCallback(e => {
        startTransition(() => dispatch('mouseover'));
        onMouseOver?.(e);
    }, [onMouseOver]);
    const onMouseOutWrapper = useCallback(e => {
        startTransition(() => dispatch('mouseout'));
        onMouseOut?.(e);
    }, [onMouseOut]);

    const onFocusWrapper = useCallback(e => {
        startTransition(() => dispatch('focus'));
        onMouseOver?.(e);
    }, [onMouseOver]);
    const onBlurWrapper = useCallback(e => {
        startTransition(() => dispatch('blur'));
        onMouseOut?.(e);
    }, [onMouseOut]);

    const prefetchRef = useRef();

    useEffect(() => {
        const { current } = prefetchRef;
        if (!current) {
            return;
        }

        const abort = new AbortController();
        const { signal } = abort;
        observe(current, near => {
            if (near) {
                startTransition(() => dispatch('near'));
            } else {
                startTransition(() => dispatch('far'));
            }
        }, { signal });
        return () => abort.abort();
    }, []);

    const hover = mouseover || focus;
    useHover(hover ? url : null);
    usePrefetchPathname((near || hover) ? url : null);

    return <a
               {...props}
               onClick={onClickWrapper}
               onMouseOver={onMouseOverWrapper}
               onMouseOut={onMouseOutWrapper}
               onFocus={onFocusWrapper}
               onBlur={onBlurWrapper}
               ref={elem => {
                   prefetchRef.current = fail ? null : elem;

                   if (ref) {
                       ref.current = elem;
                   }
               }}>{children}</a>;
};

const ARef = forwardRef(AClient);

export { ARef as AClient, ARef as default };
