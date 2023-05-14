import { forwardRef } from "react";
import { li, marker, content } from "./li.module.css";

export const Li = forwardRef((props, ref) =>
<li role="listitem" className={li} {...props} ref={ref}>
    <div role="presentation" className={marker} />
    <div role="presentation" className={content}>
        {props.children}
    </div>
</li>);
Li.displayName = `Li`;
