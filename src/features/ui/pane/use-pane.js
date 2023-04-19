import { useState, useCallback, useTransition } from "react";

export const usePane = open => {
    // FIXME todo set initial state based off of open
    const [, startTransition] = useTransition();
    const [prevOpen, setPrevOpen] = useState(open);
    const endTransition = useCallback(() => {
        startTransition(() => setPrevOpen(open));
    }, [open]);
    const isTransitioning = prevOpen !== open;
    return { isTransitioning, endTransition };
};
