import { useCallback, useReducer, useTransition} from "react";

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

export const useA = () => {
    const [, startTransition] = useTransition();
    const [{
        mouseover: hasMouseOver,
        focus: hasFocus,
        near: isNear
    }, dispatch] = useReducer(reducer, initState);

    const far = useCallback(() => startTransition(() => dispatch('far')), []);
    const near = useCallback(() => startTransition(() => dispatch('near')), []);
    const mouseOver = useCallback(() => startTransition(() => dispatch('mouseover')), []);
    const mouseOut = useCallback(() => startTransition(() => dispatch('mouseout')), []);
    const focus = useCallback(() => startTransition(() => dispatch('focus')), []);
    const blur = useCallback(() => startTransition(() => dispatch('blur')), []);

    const hover = hasMouseOver || hasFocus;
    return [
        { hover, near: isNear },
        { far, near, mouseOver, mouseOut, focus, blur }
    ];
};
