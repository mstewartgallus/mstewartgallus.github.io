import { useCallback, useTransition, useState } from "react";

export const useFocus = ({ onFocus, onBlur }) => {
    const [, startTransition] = useTransition();
    const [focus, setFocus] = useState(false);
    const onFocusWrap = useCallback(e => {
        startTransition(() => setFocus(true));
        onFocus?.(e);
    }, [onFocus]);
    const onBlurWrap = useCallback(e => {
        startTransition(() => setFocus(false));
        onBlur?.(e);
    }, [onBlur]);
    return { focus, onFocus: onFocusWrap, onBlur: onBlurWrap };
};
