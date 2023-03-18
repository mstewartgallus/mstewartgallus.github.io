import { lazy } from "react";

const never = new Promise(() => {});

export const Suspend = lazy(() => never);

export default Suspend;
