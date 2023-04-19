import { useReducer, useCallback, useTransition } from "react";

const reducer = (state, action) => {
    switch (action) {
    case "start": return true;
    case "end": return false;
    default: return state;
    }
};

export const usePane = () => {
    const [,startTransition] = useTransition();
    const [isTransitioning, dispatch] = useReducer(reducer, false);

    const start = useCallback(() => startTransition(() => dispatch('start')), []);
    const end = useCallback(() => startTransition(() => dispatch('end')), []);
    return { isTransitioning, start, end };
};
