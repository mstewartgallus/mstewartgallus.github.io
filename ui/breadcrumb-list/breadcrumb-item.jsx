import { item, marker, content } from "./breadcrumb-item.module.css";

export const BreadcrumbItem = props =>
    <li role="listitem" className={item} {...props}>
        <div role="presentation" className={marker} />
        <div role="presentation" className={content}>
            {props.children}
        </div>
    </li>;
BreadcrumbItem.displayName = `BreadcrumbItem`;
