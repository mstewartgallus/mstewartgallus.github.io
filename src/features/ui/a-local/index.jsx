import {
    forwardRef,
    useRef,
    useCallback,
    useEffect, useReducer, useTransition
} from "react";
import { prefetchPathname, navigate } from "gatsby";
import { observe } from "./use-intersect";

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
    const prefetchRef = useRef();

    const { href } = props;

    // Do this sort of silliness to integrate with React's native
    // scheduling as much as possible and appropriately idle and not
    // block threads.

    const [, startTransition] = useTransition();
    const [{ mouseover, focus, near }, dispatch] = useReducer(reducer, initState);

    const onClickWrapper = useCallback(async e => {
        onClick?.(e);
        if (e.defaultPrevented) {
            return;
        }

        e.preventDefault();
        await navigate(href);
    }, [onClick, href]);

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
    useHover(hover ? href : null);
    usePrefetchPathname((near || hover) ? href : null);

    return <a
               {...props}
               onClick={onClickWrapper}
               onMouseOver={onMouseOverWrapper}
               onMouseOut={onMouseOutWrapper}
               onFocus={onFocusWrapper}
               onBlur={onBlurWrapper}
               ref={elem => {
                   prefetchRef.current = elem;
                   if (ref) {
                       ref.current = elem;
                   }
               }}>{children}</a>;
};

const ARef = forwardRef(AClient);

export { ARef as AClient, ARef as default };
