import { useSyncExternalStore } from "react";

let prevLocation = null;
const callbacks = new Set();

export const usePrevLocation = () => useSyncExternalStore(cb => {
    let ignore = false;
    const callback = () => {
        if (ignore) {
            return;
        }
        cb();
    };
    callbacks.add(callback);
    return () => {
        ignore = true;
        callbacks.delete(callback);
    };
}, () => prevLocation, () => prevLocation);

export const onRouteUpdate = x => {
    prevLocation = x;
    for (const cb of callbacks) {
        cb();
    }
};
