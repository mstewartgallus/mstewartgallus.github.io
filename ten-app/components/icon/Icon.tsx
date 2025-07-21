import type { ReactNode } from "react";

import styles from "./Icon.module.css";

interface Props {
    readonly children: ReactNode;
}
export const Icon = ({children}: Props) =>
    <div className={styles.editButtonIcon}>
       {children}
    </div>;
