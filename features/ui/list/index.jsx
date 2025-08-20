import styles from "./list.module.css";

export const Ol = props => <ol role="list" className={styles.ol} {...props} />;

export const Ul = props => <ul role="list" className={styles.ul} {...props} />;
export const Menu = props => <menu role="list" className={styles.ul} {...props} />;

export const Li = props =>
    <li role="listitem" className={styles.li} {...props}>
        <div role="presentation" className={styles.marker} />
        <div role="presentation" className={styles.content}>
            {props.children}
        </div>
    </li>;
