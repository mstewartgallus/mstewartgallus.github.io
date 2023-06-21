import { forwardRef } from "react";
import {
    ol, ul,
    li,
    marker,
    content
} from "./list.module.css";

export const Ol = forwardRef((props, ref) =>
    <ol role="list" className={ol} {...props} ref={ref}>
        {props.children}
    </ol>);
Ol.displayName = `Ol`;

export const Ul = forwardRef((props, ref) =>
    <ul role="list" className={ul} {...props} ref={ref}>
        {props.children}
    </ul>);
Ul.displayName = `Ul`;

export const Menu = forwardRef((props, ref) =>
    <menu role="list" className={ul} {...props} ref={ref}>
        {props.children}
    </menu>);
Menu.displayName = `Menu`;

export const Li = forwardRef((props, ref) =>
    <li role="listitem" className={li} {...props} ref={ref}>
        <div role="presentation" className={marker} />
        <div role="presentation" className={content}>
            {props.children}
        </div>
    </li>);
Li.displayName = `Li`;
