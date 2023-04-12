import { Suspense, lazy } from "react";
export { onRouteUpdate, onRouteUpdateDelayed } from "./listeners.js";

const ViewTransitionLazy = lazy(() => import('./view-transition.jsx'));

export const ViewTransition = () =>
<Suspense>
    <ViewTransitionLazy />
</Suspense>;
