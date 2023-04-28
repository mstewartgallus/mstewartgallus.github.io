import { useCallback, useState, useTransition } from "react";

export const useHover = ({ onMouseEnter, onMouseLeave }) => {
    const [, startTransition] = useTransition();
    const [hover, setHover] = useState(false);
    const onMouseEnterWrap = useCallback(e => {
        startTransition(() => setHover(true));
        onMouseEnter?.(e);
    }, [onMouseEnter]);
    const onMouseLeaveWrap = useCallback(e => {
        startTransition(() => setHover(false));
        onMouseLeave?.(e);
    }, [onMouseLeave]);
    return {
        hover,
        onMouseEnter: onMouseEnterWrap,
        onMouseLeave: onMouseLeaveWrap
    };
};
