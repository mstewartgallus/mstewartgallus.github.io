import { item, marker, content } from "./breadcrumb-item.module.css";

const BreadcrumbItem = props =>
    <li role="listitem" className={item} {...props}>
        <div role="presentation" className={marker} />
        <div role="presentation" className={content}>
            {props.children}
        </div>
    </li>;

export default BreadcrumbItem;
