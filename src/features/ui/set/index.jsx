import { forwardRef } from "react";
import { set, item } from "./list.module.css";

const Set = (props, ref) =>
<ul role="list" className={set} {...props} ref={ref}>
    {props.children}
</ul>;

const SetItem = (props, ref) =>
<li role="listitem" className={item} {...props} ref={ref}>
    {props.children}
</li>;

const SetRef = forwardRef(Set);
const SetItemRef = forwardRef(SetItem);

export { SetRef as Set, SetItemRef as SetItem };
