let routeUpdates = new Set();
let routeDelays = new Set();

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

export const routeUpdate = ({ signal }) => new Promise(r => {
    signal.addEventListener('abort', () => {
        routeUpdates.delete(r);
    });
    routeUpdates.add(r);
});

export const routeUpdateDelayed = ({ signal }) => new Promise(r => {
    signal.addEventListener('abort', () => {
        routeDelays.delete(r);
    });
    routeDelays.add(r);
});
