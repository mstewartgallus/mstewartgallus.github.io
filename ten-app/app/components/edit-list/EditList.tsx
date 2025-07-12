import type { ReactNode } from "react";
import styles from "./EditList.module.css";

interface Props {
  readonly children: ReactNode;
}

export const EditList = ({children}: Props) =>
    <ul className={styles.editList}>
    {children}
</ul>;

export const EditItem = ({children}: Props) =>
    <li className={styles.editItem}>
    {children}
</li>;
