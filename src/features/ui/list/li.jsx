import { forwardRef } from "react";
import { Marker } from "./marker.jsx";
import { li, content } from "./li.module.css";

export const Li = forwardRef((props, ref) =>
<li role="listitem" className={li} {...props} ref={ref}>
    <Marker />
    <div role="presentation" className={content}>
        {props.children}
    </div>
</li>);
Li.displayName = `Li`;
