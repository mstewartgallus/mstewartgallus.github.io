import type { JSX } from "react";
import styles from "./list.module.css";

export const Ol = (props: JSX.IntrinsicElements['ol']) => <ol role="list" className={styles.ol} {...props} />;

export const Ul = (props: JSX.IntrinsicElements['ul']) => <ul role="list" className={styles.ul} {...props} />;
export const Menu = (props: JSX.IntrinsicElements['menu']) => <menu role="list" className={styles.ul} {...props} />;

export const Li = (props: JSX.IntrinsicElements['li']) =>
    <li role="listitem" className={styles.li} {...props}>
        <div role="presentation" className={styles.marker} />
        <div role="presentation" className={styles.content}>
            {props.children}
        </div>
    </li>;
