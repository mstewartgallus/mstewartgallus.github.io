export let routeUpdates = new Set();
export let routeDelays = new Set();

export const onRouteUpdate = () => {
    const cbs = routeDelays;
    routeDelays = new Set();
    for (const cb of cbs) {
        cb('update');
    }
};

export const onRouteUpdateDelayed = () => {
    const cbs = routeDelays;
    routeDelays = new Set();
    for (const cb of cbs) {
        cb('delayed');
    }
};
