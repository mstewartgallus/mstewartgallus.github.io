import { useDeferredValue, useSyncExternalStore } from "react";

let updateState = 'update';

const callbacks = new Set();

export const useUpdateState = () => {
    const state = useSyncExternalStore(callback => {
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
    return useDeferredValue(state);
};

export const onPreRouteUpdate = () => {
    if (updateState === 'pre') {
        return;
    }
    updateState = 'pre';
    for (const cb of callbacks) {
        cb();
    }
};

export const onRouteUpdate = () => {
    if (updateState === 'update') {
        return;
    }
    updateState = 'update';
    for (const cb of callbacks) {
        cb();
    }
};

export const onRouteUpdateDelayed = () => {
    if (updateState === 'delayed') {
        return;
    }
    updateState = 'delayed';
    for (const cb of callbacks) {
        cb();
    }
};
