import { forwardRef } from "react";
import { ol } from "./ol.module.css";

export const Ol = forwardRef((props, ref) =>
    <ol role="list" className={ol} {...props} ref={ref} />);
Ol.displayName = `Ol`;
