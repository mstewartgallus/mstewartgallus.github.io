import { forwardRef } from "react";
import { item, marker, content } from "./li.module.css";

export const Li = forwardRef((props, ref) =>
<li role="listitem" className={item} {...props} ref={ref}>
    <div role="presentation" className={marker} />
    <div role="presentation" className={content}>
        {props.children}
    </div>
</li>);
Li.displayName = `Li`;
