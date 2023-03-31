import { useSyncExternalStore } from "react";

let prevLocation = null;
const cbs = new Set();

export const usePrevLocation = () => useSyncExternalStore(
    cb => {
        cbs.add(cb);
        return () => cbs.delete(cb);
    },
    () => prevLocation,
    () => prevLocation);

export const setPrevLocation = value => {
    prevLocation = value;
    for (const cb in cbs) {
        cb();
    }
};
