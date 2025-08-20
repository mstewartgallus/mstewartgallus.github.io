import type { JSX } from "react";
import styles from "./breadcrumb-item.module.css";

const BreadcrumbItem = (props: JSX.IntrinsicElements['li']) =>
    <li role="listitem" className={styles.item} {...props}>
        <div role="presentation" className={styles.marker} />
        <div role="presentation" className={styles.content}>
            {props.children}
        </div>
    </li>;

export default BreadcrumbItem;
