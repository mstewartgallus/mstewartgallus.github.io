import { lazy } from "react";
import { Client } from "@features/util";
export { onRouteUpdate, onRouteUpdateDelayed } from "./listeners.js";

const ViewTransitionLazy = lazy(() => import('./view-transition.jsx'));

export const ViewTransition = () =>
<Client>
    <ViewTransitionLazy />
</Client>;
