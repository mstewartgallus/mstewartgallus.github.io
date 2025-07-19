import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import { useWrap, toDataProps } from "@/app/hooks/wrap";

import styles from "./Button.module.css";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({children, ...props}: ButtonProps) => {
    const { state, hooks } = useWrap();
    return <div className={styles.editButtonWrapper} {...hooks}>
        <button {...props} className={styles.editButton} {...toDataProps(state)}>
            {children}
        </button>
    </div>;
};
