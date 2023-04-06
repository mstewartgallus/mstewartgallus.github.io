import { useEffect, useState, useTransition } from "react";

const onPreUpdateCallbacks = new Set();
const onUpdateCallbacks = new Set();
const onUpdateDelayedCallbacks = new Set();

export const useFocus = ref => {
    useEffect(() => {
        if (!ref) {
            return;
        }

        let ignore = false;
        const cb = ({prevLocation, location}) => {
            if (ignore) {
                return;
            }

            if (!prevLocation) {
                return;
            }
            const { hash } = location;
            if (hash) {
                const elem = document.getElementById(hash.slice(1));
                elem.focus({ focusVisible: true});
                return;
            }

            const { current } = ref;
            if (!current) {
                return;
            }
            current.focus({ preventScroll: true, focusVisible: true});
        };
        onUpdateCallbacks.add(cb);
        return () => {
            ignore = true;
            onUpdateCallbacks.delete(cb);
        };
    }, [ref]);
};

export const usePrevLocation = () => {
    const [_, startTransition] = useTransition();
    const [prevLocation, setPrevLocation] = useState(null);
    useEffect(() => {
        let ignore = false;
        const cb = ({prevLocation}) => {
            if (ignore) {
                return;
            }
            startTransition(() => setPrevLocation(prevLocation));
        };
        onUpdateCallbacks.add(cb);
        return () => {
            ignore = true;
            onUpdateCallbacks.delete(cb);
        };
    }, []);
    return prevLocation;
};

export const RouteUpdateListener = ({ onRouteUpdate }) => {
    useEffect(() => {
        if (!onRouteUpdate) {
            return;
        }

        let ignore = false;
        const cb = (...xs) => {
            if (ignore) {
                return;
            }
            onRouteUpdate(...xs);
        };
        onUpdateCallbacks.add(cb);
        return () => {
            ignore = true;
            onUpdateCallbacks.delete(cb);
        };
    }, [onRouteUpdate]);
    return null;
};

export const PreRouteUpdateListener = ({ onPreRouteUpdate }) => {
    useEffect(() => {
        if (!onPreRouteUpdate) {
            return;
        }

        let ignore = false;
        const cb = (...xs) => {
            if (ignore) {
                return;
            }
            onPreRouteUpdate(...xs);
        };
        onPreUpdateCallbacks.add(cb);
        return () => {
            ignore = true;
            onPreUpdateCallbacks.delete(cb);
        };
    }, [onPreRouteUpdate]);
    return null;
};

export const RouteUpdateDelayedListener = ({ onRouteUpdateDelayed }) => {
    useEffect(() => {
        if (!onRouteUpdateDelayed) {
            return;
        }

        let ignore = false;
        const cb = (...xs) => {
            if (ignore) {
                return;
            }
            onRouteUpdateDelayed(...xs);
        };
        onUpdateDelayedCallbacks.add(cb);
        return () => {
            ignore = true;
            onUpdateDelayedCallbacks.delete(cb);
        };
    }, [onRouteUpdateDelayed]);
    return null;
};

export const onPreRouteUpdate = (...xs) => {
    for (const cb of Array.from(onPreUpdateCallbacks)) {
        cb(...xs);
    }
};

export const onRouteUpdateDelayed = (...xs) => {
    for (const cb of Array.from(onUpdateDelayedCallbacks)) {
        cb(...xs);
    }
};

export const onRouteUpdate = (...xs) => {
    for (const cb of Array.from(onUpdateCallbacks)) {
        cb(...xs);
    }
};
