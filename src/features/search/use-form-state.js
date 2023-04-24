import { useTransition, useReducer, useCallback } from "react";

const initState = {
    s: '',
    category: new Set(),
    tag: new Set(),
    place: new Set(),
    person: new Set()
};

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case 'set': {
        const { name, value } = action;
        return { ...state, [name]: value };
    }

    default:
        return state;
    }
};

export const useFormState = () => {
    const [
        { s, category, tag, place, person },
        dispatch
    ] = useReducer(reducer, initState);
    const [, startTransition] = useTransition();

    const setter = useCallback(
        (name, value) => dispatch({ type: 'set', name, value }),
        []);

    const navigate = useCallback(
        ({s, category, tag, place, person}) =>
        startTransition(() =>
            dispatch({ type: 'navigate', s, category, tag, place, person })),
        []);

    return {
        s, category, tag, place, person,
        setter,
        navigate
    };
};
