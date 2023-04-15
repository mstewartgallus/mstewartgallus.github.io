import { lazy } from "react";

const supportsInert = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    return document.createElement('p').inert === false;
};

const PaneClientNoninert = lazy(() => import("./pane-client.jsx"));
const PaneClientInert = lazy(() => import("./pane-client-inert.jsx"));

// FIXME this is kind of silly but a better structure would really
// only be possible with top level await

export const PaneClient = props => {
    return supportsInert() ?
        <PaneClientNoninert {...props} /> : <PaneClientInert {...props} />;
};

export default PaneClient;
