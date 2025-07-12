"use client";

import type { PointerEvent } from "react";
import { useCallback, useId } from "react";
import { EntryForm } from "../entry-form/EntryForm";
import styles from './Entry.module.css';

interface Props {
    readonly value?: string;
    readonly onChange: (value: string) => void;
    readonly open: boolean;
    readonly onArchive: () => void;
    readonly onDown: () => void;
    readonly onUp: () => void;
    readonly onToggle: () => void;
}

export const Entry = ({
    value, onChange,
    open, onToggle,
    onArchive, onUp, onDown
}: Props) => {
    const controlId = useId();
    const buttonId = useId();

    const onToggleClick = useCallback((e: PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();

        onToggle();
    }, [onToggle]);
    return <div className={styles.editFormWrapper}>
               <div className={styles.button}>
                   <button
                       id={buttonId}
                       onClick={onToggleClick}
                       aria-expanded={open}
                       aria-controls={controlId}
                   >
                       {open ? <>+</> : <>-</>}
                   </button>
               </div>

               <EntryForm
                   controlId={controlId} buttonId={buttonId}
                   open={open} value={value}
                   onChange={onChange}
                   onArchive={onArchive} onUp={onUp} onDown={onDown}
               />
           </div>;
};
