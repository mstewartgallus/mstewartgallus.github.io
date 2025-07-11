"use client";

import { useCallback, useId } from "react";
import { EntryForm } from "../entry-form/EntryForm";
import styles from './Entry.module.css';

const iff = (cond, value) => cond ? value : undefined;

export const Entry = ({
    value, onChange,
    open, onToggle,
    onArchive, onUp, onDown
}) => {
    const controlId = useId();
    const buttonId = useId();

    const onToggleClick = useCallback(e => {
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
