import { lazy } from "react";

const query = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    return document.createElement('p').inert === false;
};

let support = undefined;
const supportsInert = () => {
    if (support === undefined) {
        support = query();
    }
    return support;
};

const PaneClientNoninert = lazy(() => import("./pane-client.jsx"));
const PaneClientInert = lazy(() => import("./pane-client-inert.jsx"));

// FIXME this is kind of silly but a better structure would really
// only be possible with top level await

export const PaneClient = props => {
    const Pane = supportsInert() ? PaneClientNoninert : PaneClientInert;
    return <Pane {...props} />;
};

export default PaneClient;
