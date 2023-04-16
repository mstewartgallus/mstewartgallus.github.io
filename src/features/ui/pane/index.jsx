import { lazy, Suspense } from "react";

const PaneClient = lazy(() => import("../pane-client"));

const Fallback = ({open, ...props}) => {
    return <div {...props} />;
};

// Force panes open when no JS
export const Pane = ({willChange, ...props}) =>
<Suspense fallback={<Fallback {...props} />}>
    <PaneClient {...props} willChange={willChange} />
</Suspense>;

export default Pane;
