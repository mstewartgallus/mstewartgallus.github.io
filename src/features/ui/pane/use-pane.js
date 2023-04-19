import { useReducer, useCallback, useTransition } from "react";

const initial = {
    prevOpen: null,
    isTransitioning: false
};

const reducer = (state, action) => {
    const { type, open } = action;
    switch (type) {
    case "start": return { prevOpen: open, isTransitioning: true };
    case "end": return { prevOpen: open, isTransitioning: false };
    default: return state;
    }
};

export const usePane = open => {
    const [, startTransition] = useTransition();
    const [{ prevOpen, isTransitioning }, dispatch] = useReducer(reducer, initial);
    if (prevOpen !== open) {
        dispatch({ type: "start", open });
    }
    const endTransition = useCallback(() => {
        startTransition(() => dispatch({ type: "end", open }));
    }, [open]);
    return { isTransitioning, endTransition };
};
