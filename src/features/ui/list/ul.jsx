import { forwardRef } from "react";
import { unorderedList } from "./list.module.css";

const Ul = (props, ref) =>
<ul role="list" className={unorderedList} {...props} ref={ref} />;

const UlRef = forwardRef(Ul);

export { UlRef as Ul };
