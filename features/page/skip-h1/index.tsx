import type { JSX } from "react";
import { H1A } from "@/ui";

// FIXME... seems wrong
export const SkipH1 = (props: JSX.IntrinsicElements['a']) => {
    return <H1A {...props} />;
};
