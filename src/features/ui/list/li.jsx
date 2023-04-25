import { forwardRef } from "react";
import { item, marker, content } from "./li.module.css";

const Li = (props, ref) =>
<li role="listitem" className={item} {...props} ref={ref}>
    <div role="presentation" className={marker} />
    <div role="presentation" className={content}>
        {props.children}
    </div>
</li>;

const LiRef = forwardRef(Li);

export { LiRef as Li };
