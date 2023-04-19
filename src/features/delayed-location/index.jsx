import { useSyncExternalStore } from "react";
import { useLocation } from "@gatsbyjs/reach-router";

let info = null;
const callbacks = new Set();

export const onRouteUpdateDelayed = ({ location }) => {
    info = location;
    for (const callback of callbacks) {
        callback();
    }
};

const useDelayedLocationPrim = () => useSyncExternalStore(cb => {
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

export const useDelayedLocation = () => {
    const location = useLocation();
    const delayedLocation = useDelayedLocationPrim();
    return delayedLocation ?? location;
};
