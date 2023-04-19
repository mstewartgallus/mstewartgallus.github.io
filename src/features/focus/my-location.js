import { useEffect } from "react";

const callbacks = new Set();

export const useOnRouteUpdate = cb => {
    useEffect(() => {
        let ignore = false;
        const callback = x => {
            if (ignore) {
                return;
            }
            cb(x);
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, [cb]);
};

export const onRouteUpdate = x => {
    for (const cb of callbacks) {
        cb(x);
    }
};
