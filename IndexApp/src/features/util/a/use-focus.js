import { useCallback } from "react";
import { hovering } from "./hovering.js";

export const useFocus = ({
    href,
    onFocus, onMouseEnter
}) => {
    const onFocusWrap = useCallback(e => {
        hovering(href);
        onFocus?.(e);
    }, [onFocus, href]);
    const onMouseEnterWrap = useCallback(e => {
        hovering(href);
        onMouseEnter?.(e);
    }, [onMouseEnter, href]);

    return {
        onFocus: onFocusWrap, onMouseEnter: onMouseEnterWrap
    };
};
