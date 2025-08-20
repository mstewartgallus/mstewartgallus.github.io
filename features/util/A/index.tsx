import type { JSX } from "react";

// FIXME ... use next.js Link component
export const A = (props: JSX.IntrinsicElements['a']) => {
    return <a {...props} />;
};
