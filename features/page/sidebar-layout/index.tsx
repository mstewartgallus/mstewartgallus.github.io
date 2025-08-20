import type { ReactNode } from "react";
import styles from "./sidebar.module.css";

interface Props {
    children?: ReactNode;
    sidebar?: ReactNode;
}

export const SidebarLayout = ({ children, sidebar }: Readonly<Props>) =>
<div className={styles.layout}>
    <div className={styles.mainbar}>
        {children}
    </div>
    <div className={styles.sidebar}>
        {sidebar}
    </div>
</div>;
