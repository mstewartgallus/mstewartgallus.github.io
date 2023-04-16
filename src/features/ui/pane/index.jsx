import { lazy, Suspense } from "react";

const PaneClient = lazy(() => import("./pane-client.jsx"));

// Force panes open when no JS
export const Pane = ({children, willChange, open}) =>
<Suspense fallback={children}>
    <PaneClient willChange={willChange} open={open}>
        {children}
    </PaneClient>
</Suspense>;

export default Pane;
