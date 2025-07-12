"use client";
import type { ChangeEvent } from "react";
import { useCallback, useState } from 'react';
import styles from "./Input.module.css";

interface Props {
    readonly value?: string;
    readonly onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
    const [editValue, setEditValue] = useState(value);

    const onChangeCb = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        setEditValue(value);
        onChange(value);
    }, [onChange]);

    return <input className={styles.editInput}
            required={true}
            onChange={onChangeCb}
            value={editValue ?? ''} />;
};
