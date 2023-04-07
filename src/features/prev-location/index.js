import { useSyncExternalStore } from "react";

let prevLocation = null;

const callbacks = new Set();

export const usePrevLocation = () => {
    const prev = useSyncExternalStore(callback => {
        let ignore = false;
        const cb = () => {
            if (ignore) {
                return;
            }
            callback();
        };
        callbacks.add(cb);
        return () => {
            ignore = true;
            callbacks.delete(cb);
        };
    }, () => prevLocation, () => prevLocation);
    return prev;
};

export const onRouteUpdate = ({prevLocation: prevLocationNew}) => {
    if (prevLocation === prevLocationNew) {
        return;
    }

    prevLocation = prevLocationNew;
    for (const cb of callbacks) {
        cb();
    }
};
