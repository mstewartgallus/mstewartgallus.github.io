import { lazy, Suspense } from "react";
export { onRouteUpdate } from "./prev-location.js";
export { focusRef } from "./focus-ref.js";

// hack around the Gatsby focus wrapper for manual focus management
export const onClientEntry = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};

const FocusLazy = lazy(() => import('./focus.jsx'));

export const Focus = () =>
<Suspense>
    <FocusLazy />
</Suspense>;
