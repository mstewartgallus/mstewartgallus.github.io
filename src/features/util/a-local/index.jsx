import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { navigate } from "gatsby";
import { useA } from "./use-a";
import { useHover } from "./use-hover";
import { usePrefetchPathname } from "./use-prefetch-pathname";
import { useNear } from "./use-intersect";

const useOnClick = (href, onClick) => useCallback(async e => {
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

const useOnMouseOver = (mouseOver, onMouseOver) => useCallback(e => {
    mouseOver();
    onMouseOver?.(e);
}, [onMouseOver, mouseOver]);

const useOnMouseOut = (mouseOut, onMouseOut) => useCallback(e => {
    mouseOut();
    onMouseOut?.(e);
}, [onMouseOut, mouseOut]);

const useOnFocus = (focus, onFocus) => useCallback(e => {
    focus();
    onFocus?.(e);
}, [onFocus, focus]);

const useOnBlur = (blur, onBlur) => useCallback(e => {
    blur();
    onBlur?.(e);
}, [onBlur, blur]);

const ALocal = (props, ref) => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, []);

    const {
        href,
        onClick,
        onFocus, onBlur,
        onMouseOver, onMouseOut
    } = props;

    const { hover, focus, blur, mouseOver, mouseOut } = useA();

    const onClickWrap = useOnClick(href, onClick);
    const onMouseOverWrap = useOnMouseOver(mouseOver, onMouseOver);
    const onMouseOutWrap = useOnMouseOut(mouseOut, onMouseOut);
    const onFocusWrap = useOnFocus(focus, onFocus);
    const onBlurWrap = useOnBlur(blur, onBlur);

    useHover(hover ? href : null);

    const near = useNear(myref);

    usePrefetchPathname((near || hover) ? href : null);

    return <a {...props}
              onClick={onClickWrap}
              onMouseOver={onMouseOverWrap}
              onMouseOut={onMouseOutWrap}
              onFocus={onFocusWrap}
              onBlur={onBlurWrap}
              ref={myref} />;
};

const ARef = forwardRef(ALocal);

export { ARef as ALocal };
