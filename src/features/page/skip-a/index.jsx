import { focusRef } from "@features/focus";
import { A } from "@features/ui";
import { container, content } from "./skip-a.module.css";

export const SkipA = ({children, ...props}) =>
<span className={container}>
    <A {...props} id="top" href="#content" ref={focusRef}>
        <span className={content}>{children}</span>
    </A>
</span>;
