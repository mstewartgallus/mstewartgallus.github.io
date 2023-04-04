import { useState, useTransition, useEffect } from "react";

const callbacks = new Set();
let prevLocation;

export const getPrevLocation = () => prevLocation;

export const usePrevLocation = () => {
    const [prev, setPrev] = useState();
    const [_, startTransition] = useTransition();
    useEffect(() => {
        let ignore = false;
        const callback = prev => {
            if (ignore) {
                return;
            }
            startTransition(() => setPrev(getPrevLocation()));
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, []);
    return prev;
};

export const setPrevLocation = prevLocationNew => {
    prevLocation = prevLocationNew;
    for (const cb of Array.from(callbacks)) {
        cb();
    }
};
