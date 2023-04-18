import { lazy } from "react";
import { Client } from "@features/util";
export { onRouteUpdate } from "./prev-location.js";
export { focusRef } from "./focus-ref.js";

// hack around the Gatsby focus wrapper for manual focus management
// after hydration
export const onInitialClientRender = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};

const FocusLazy = lazy(() => import('./focus.jsx'));

export const Focus = () =>
<Client>
    <FocusLazy />
</Client>;
