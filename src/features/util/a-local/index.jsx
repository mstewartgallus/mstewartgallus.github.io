import {
    forwardRef,
    useRef,
    useCallback,
    useEffect
} from "react";
import { navigate } from "gatsby";
import { useA } from "./use-a";
import { useHover } from "./use-hover";
import { usePrefetchPathname } from "./use-prefetch-pathname";
import { onNearFar } from "./use-intersect";

const ALocal = (props, ref) => {
    const {
        onClick,
        onFocus, onBlur,
        onMouseOver, onMouseOut
    } = props;
    const prefetchRef = useRef();

    const { href } = props;

    const [
        {
            hover,
            near: isNear
        },
        {
            focus, blur,
            mouseOver, mouseOut,
            near, far
        }
    ] = useA();

    const onClickWrapper = useCallback(async e => {
        onClick?.(e);

        const { defaultPrevented, altKey, metaKey, shiftKey, ctrlKey, button } = e;
        if (defaultPrevented) {
            return;
        }
        if (button !== 0) {
            return;
        }

        if (altKey || metaKey || shiftKey || ctrlKey) {
            return;
        }

        e.preventDefault();
        await navigate(href);
    }, [onClick, href]);

    const onMouseOverWrapper = useCallback(e => {
        mouseOver();
        onMouseOver?.(e);
    }, [onMouseOver, mouseOver]);
    const onMouseOutWrapper = useCallback(e => {
        mouseOut();
        onMouseOut?.(e);
    }, [onMouseOut, mouseOut]);

    const onFocusWrapper = useCallback(e => {
        focus();
        onFocus?.(e);
    }, [onFocus, focus]);
    const onBlurWrapper = useCallback(e => {
        blur();
        onBlur?.(e);
    }, [onBlur, blur]);

    useEffect(() => {
        const { current } = prefetchRef;
        if (!current) {
            return;
        }

        const abort = new AbortController();
        const { signal } = abort;
        onNearFar(current, near, far, { signal });
        return () => abort.abort();
    }, [near, far]);

    useHover(hover ? href : null);
    usePrefetchPathname((isNear || hover) ? href : null);

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
               }}
           />;
};

const ARef = forwardRef(ALocal);

export { ARef as ALocal };
