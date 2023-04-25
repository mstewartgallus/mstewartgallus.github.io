import { forwardRef } from "react";
import { orderedList } from "./list.module.css";

const Ol = (props, ref) =>
<ol role="list" className={orderedList} {...props} ref={ref} />;

const OlRef = forwardRef(Ol);

export { OlRef as Ol };
