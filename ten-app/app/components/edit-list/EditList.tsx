import styles from "./EditList.module.css";

export const EditList = ({children, ...props}) =>
    <ul className={styles.editList} {...props}>
    {children}
</ul>;

export const EditItem = ({children, ...props}) =>
    <li className={styles.editItem} {...props}>
    {children}
</li>;
