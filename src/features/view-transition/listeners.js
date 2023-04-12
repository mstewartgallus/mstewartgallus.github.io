let resolveRouteUpdate = () => {};
let resolveRouteUpdateDelayed = () => {};

export const onRouteUpdate = () => resolveRouteUpdate();
export const onRouteUpdateDelayed = () => resolveRouteUpdateDelayed();

export const routeUpdate = () => new Promise(r => resolveRouteUpdate = r);
export const routeUpdateDelayed = () => new Promise(r => resolveRouteUpdateDelayed = r);
