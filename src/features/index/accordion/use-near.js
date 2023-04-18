import { useMemo, useReducer, useTransition } from "react";

const initialState = {
    hover: false,
    focus: false
};

const near = (state, action) => {
    switch (action) {
    case 'mouseover':
        return { ...state, hover: true };

    case 'mouseout':
        return { ...state, hover: false };

    case 'focus':
        return { ...state, focus: true };

    case 'blur':
        return { ...state, focus: false };

    default:
        return state;
    }
};

export const useNear = () => {
    const [,startTransition] = useTransition();
    const [{hover, focus}, dispatch] = useReducer(near, initialState);
    const events = useMemo(() => ({
        mouseOver: () => startTransition(() => dispatch('mouseover')),
        mouseOut: () => startTransition(() => dispatch('mouseout')),
        focus:  () => startTransition(() => dispatch('focus')),
        blur: () => startTransition(() => dispatch('blur'))
    }), []);
    return [hover || focus, events];
};
