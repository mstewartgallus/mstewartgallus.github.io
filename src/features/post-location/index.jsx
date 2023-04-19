import { useSyncExternalStore } from "react";
import { useLocation } from "@gatsbyjs/reach-router";

let info = null;
const callbacks = new Set();

export const onRouteUpdate = ({ location }) => {
    info = location;
    for (const callback of callbacks) {
        callback();
    }
};

const usePostLocationPrim = () => useSyncExternalStore(cb => {
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
}, () => info, () => info);

export const usePostLocation = () => {
    const location = useLocation();
    const postLocation = usePostLocationPrim();
    return postLocation ?? location;
};
