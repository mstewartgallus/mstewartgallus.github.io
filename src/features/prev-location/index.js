import { useDeferredValue, useSyncExternalStore } from "react";

let prevLocation = null;

const callbacks = new Set();

export const usePrevLocation = () => {
    const prev = useSyncExternalStore(callback => {
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
    }, () => prevLocation, () => prevLocation);
    return useDeferredValue(prev);
};

export const onRouteUpdate = ({prevLocation: prevLocationNew}) => {
    prevLocation = prevLocationNew;
    for (const cb of callbacks) {
        cb();
    }
};
