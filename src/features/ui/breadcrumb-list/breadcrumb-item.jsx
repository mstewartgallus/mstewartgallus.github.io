import { forwardRef } from "react";
import { item, marker, content } from "./breadcrumb-item.module.css";

export const BreadcrumbItem = forwardRef((props, ref) =>
    <li role="listitem" className={item} {...props} ref={ref}>
        <div role="presentation" className={marker} />
        <div role="presentation" className={content}>
            {props.children}
        </div>
    </li>);
BreadcrumbItem.displayName = `BreadcrumbItem`;
