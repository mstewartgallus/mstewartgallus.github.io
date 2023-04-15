import { lazy, Suspense } from "react";

const PaneClient = lazy(() => import("../pane-client"));

const Fallback = ({open, ...props}) => {
    return <div {...props} />;
};

// Force panes open when no JS
export const Pane = props =>
<Suspense fallback={<Fallback {...props} />}>
    <PaneClient {...props} />
</Suspense>;

export default Pane;
