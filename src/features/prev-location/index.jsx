import { useSyncExternalStore } from "react";

let info = null;
const callbacks = new Set();

export const onRouteUpdate = ({ prevLocation }) => {
    info = prevLocation;
    for (const callback of callbacks) {
        callback();
    }
};

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
}, () => info, () => info);
