import { useTransition, useReducer, useCallback } from "react";

const initState = [];

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case "init": {
        const { linkIds } = action;
        return linkIds.map(id => ({ id, loaded: false }));
    }

    case "load": {
        const { index, url, title } = action;
        const { id } = state[index];
        state = Array.from(state);
        state[index] = { id, loaded: true, url, title };
        return state;
    }

    default:
        return state;
    }
};

export const useSearchState = () => {
    const [
        links,
        dispatch
    ] = useReducer(reducer, initState);
    const [, startTransition] = useTransition();

    const init = useCallback(
        links => startTransition(() => dispatch({ type: 'init', linkIds: links })),
        []);

    const load = useCallback(
        (index, url, title) =>
        startTransition(() =>
            dispatch({ type: 'load', index, url, title })),
        []);

    return {
        links,
        init,
        load
    };
};
