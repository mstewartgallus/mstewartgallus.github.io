"use client";
import { useCallback, useState } from 'react';
import styles from "./Input.module.css";

export const Input = ({ value, onChange }) => {
    const [editValue, setEditValue] = useState(value);

    const onChangeCb = useCallback(e => {
        e.preventDefault();
        const { value } = e.target;
        setEditValue(value);
        onChange(value);
    }, [onChange]);

    return <input className={styles.editInput}
            required="required"
            onChange={onChangeCb}
            value={editValue ?? ''} />;
};
