import { useSyncExternalStore } from "react";

let prevLocation = null;
const cbs = new Set();

export const usePrevLocation = () =>
useSyncExternalStore(cb => {
    cbs.add(cb);
    return () => cbs.delete(cb);
}, () => prevLocation, () => prevLocation);

export const onRouteUpdate = ({prevLocation: newPrevLocation}) => {
    prevLocation = newPrevLocation;
    for (const cb of Array.from(cbs)) {
        cb();
    }
};

export const onRouteUpdateDelayed = (...args) => {
};

export const shouldUpdateScroll = (...args) => {
    return true;
};
