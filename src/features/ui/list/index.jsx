import { forwardRef } from "react";
import {
    orderedList, unorderedList,
    item,
    marker,
    content
} from "./list.module.css";

const Ol = (props, ref) =>
<ol role="list" className={orderedList} {...props} ref={ref}>
    {props.children}
</ol>;

const Ul = (props, ref) =>
<ul role="list" className={unorderedList} {...props} ref={ref}>
    {props.children}
</ul>;

const Menu = (props, ref) =>
<menu role="list" className={unorderedList} {...props} ref={ref}>
    {props.children}
</menu>;

const Li = (props, ref) =>
<li role="listitem" className={item} {...props} ref={ref}>
    <div role="presentation" className={marker} />
    <div role="presentation" className={content}>
        {props.children}
    </div>
</li>;

const OlRef = forwardRef(Ol);
const UlRef = forwardRef(Ul);
const MenuRef = forwardRef(Menu);
const LiRef = forwardRef(Li);

export { LiRef as Li, MenuRef as Menu, UlRef as Ul, OlRef as Ol };
