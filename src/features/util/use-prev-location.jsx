import { useTransition, useEffect, useState } from "react";

const callbacks = new Set();

export const usePrevLocation = () => {
    const [prev, setPrev] = useState();
    const [_, startTransition] = useTransition();
    useEffect(() => {
        let ignore = false;
        const callback = prev => {
            if (ignore) {
                return;
            }
            startTransition(() => setPrev(prev));
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, []);
    return prev;
};

export const setPrevLocation = prevLocation => {
    for (const cb of Array.from(callbacks)) {
        cb(prevLocation);
    }
};
