import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({children, ...props}: ButtonProps) =>
    <div className={styles.editButtonWrapper}>
        <button {...props} className={styles.editButton}>
            {children}
        </button>
    </div>;
