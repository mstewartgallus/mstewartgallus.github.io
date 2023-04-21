import { useCallback, useReducer, useTransition} from "react";

const initState = {
    mouseover: false,
    focus: false
};

const reducer = (state, action) => {
    switch (action) {
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

export const useA = () => {
    const [, startTransition] = useTransition();
    const [{
        mouseover: hasMouseOver,
        focus: hasFocus,
    }, dispatch] = useReducer(reducer, initState);

    const mouseOver = useCallback(() => startTransition(() => dispatch('mouseover')), []);
    const mouseOut = useCallback(() => startTransition(() => dispatch('mouseout')), []);
    const focus = useCallback(() => startTransition(() => dispatch('focus')), []);
    const blur = useCallback(() => startTransition(() => dispatch('blur')), []);

    const hover = hasMouseOver || hasFocus;
    return {
        hover,
        mouseOver, mouseOut, focus, blur
    };
};
