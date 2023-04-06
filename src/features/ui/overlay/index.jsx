import { overlap, frame } from "./overlay.module.css";

export const OverlayItem = ({children, ...props}) =>
<div className={frame} {...props}>
    {children}
</div>;

export const Overlay = ({children, ...props}) =>
<div className={overlap} {...props}>
    {children}
</div>;
