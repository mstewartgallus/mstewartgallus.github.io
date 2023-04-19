import { useSyncExternalStore } from "react";
import { useLocation } from "@gatsbyjs/reach-router";

let preLocation = null;
const callbacks = new Set();

export const onPreRouteUpdate = ({ location }) => {
    preLocation = location;
    for (const callback of callbacks) {
        callback();
    }
};

const usePreLocationPrim = () => useSyncExternalStore(cb => {
    let ignore = false;
    const callback = () => {
        if (ignore) {
            return;
        }
        cb();
    };
    return () => {
        ignore = true;
        callbacks.delete(callback);
    };
}, () => preLocation, () => preLocation);

export const usePreLocation = () => {
    const location = useLocation();
    const preLocation = usePreLocationPrim();
    return preLocation ?? location;
};
