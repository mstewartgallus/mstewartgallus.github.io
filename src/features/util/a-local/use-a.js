import { useCallback, useReducer, useTransition} from "react";

const initState = {
    mouseenter: false,
    focus: false
};

const reducer = (state, action) => {
    switch (action) {
    case 'mouseenter':
        return { ...state, mouseenter: true };
    case 'mouseleave':
        return { ...state, mouseenter: false };

    case 'focus':
        return { ...state, focus: true };
    case 'blur':
        return { ...state, focus: false };

    default: return state;
    }
};

export const useA = () => {
    const [, startTransition] = useTransition();
    const [{
        mouseenter: hasMouseenter,
        focus: hasFocus,
    }, dispatch] = useReducer(reducer, initState);

    const mouseEnter = useCallback(() => startTransition(() => dispatch('mouseenter')), []);
    const mouseLeave = useCallback(() => startTransition(() => dispatch('mouseleave')), []);
    const focus = useCallback(() => startTransition(() => dispatch('focus')), []);
    const blur = useCallback(() => startTransition(() => dispatch('blur')), []);

    const hover = hasMouseenter || hasFocus;
    return {
        hover,
        mouseEnter, mouseLeave, focus, blur
    };
};
