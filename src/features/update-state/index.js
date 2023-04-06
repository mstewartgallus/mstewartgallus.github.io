import { useSyncExternalStore } from "react";

let updateState = 'update';

const callbacks = new Set();

export const useUpdateState = () => useSyncExternalStore(callback => {
    let ignore = false;
    const cb = () => {
        if (ignore) {
            return;
        }
        callbacks.add(callbacks);
    };
    return () => {
        ignore = true;
        callbacks.delete(cb);
    };
}, () => updateState, () => updateState);

export const onPreRouteUpdate = () => {
    updateState = 'pre';
    for (const cb of callbacks) {
        cb();
    }
};

export const onRouteUpdate = () => {
    updateState = 'update';
    for (const cb of callbacks) {
        cb();
    }
};

export const onRouteUpdateDelayed = () => {
    updateState = 'delayed';
    for (const cb of callbacks) {
        cb();
    }
};
