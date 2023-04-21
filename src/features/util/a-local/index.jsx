import {
    forwardRef,
    useCallback
} from "react";
import { navigate } from "gatsby";
import { useA } from "./use-a";
import { useHover } from "./use-hover";
import { usePrefetchPathname } from "./use-prefetch-pathname";
import { useNear } from "./use-intersect";

const ALocal = (props, ref) => {
    const {
        onClick,
        onFocus, onBlur,
        onMouseOver, onMouseOut
    } = props;

    const { href } = props;

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

    const { hover, focus, blur, mouseOver, mouseOut } = useA();

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

    const { ref: prefetchRef, near } = useNear();

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
                   prefetchRef(elem);
                   if (ref) {
                       ref.current = elem;
                   }
               }}
           />;
};

const ARef = forwardRef(ALocal);

export { ARef as ALocal };
