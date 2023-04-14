import { lazy, Suspense } from "react";

const supportsInert = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    return document.createElement('p').inert === false;
};

// FIXME this is kind of silly but a better structure would really
// only be possible with top level await
const PaneClient = lazy(() => supportsInert() ?
                         import("../pane-client") :
                         import("./pane-client-inert.jsx"));


// Force panes open when no JS
export const Pane = ({children, open}) =>
<Suspense
    fallback={
        <div>
            {children}
        </div>
    }
>
    <PaneClient open={open}>
        {children}
    </PaneClient>
</Suspense>;

export default Pane;
