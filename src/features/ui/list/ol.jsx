import { forwardRef } from "react";
import { orderedList } from "./list.module.css";

export const Ol = forwardRef((props, ref) =>
    <ol role="list" className={orderedList} {...props} ref={ref} />);
Ol.displayName = `Ol`;
