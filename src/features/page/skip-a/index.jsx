import { focusRef } from "@features/focus";
import { A } from "@features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

export const SkipA = ({children, ...props}) =>
// Fix space hack
<div className={wrapper}>
    <A className={skipLink} {...props} ref={focusRef}>{children}</A>
    <span aria-hidden="true">&emsp;</span>
</div>;
