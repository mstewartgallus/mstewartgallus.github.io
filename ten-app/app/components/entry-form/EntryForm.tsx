"use client";

import type { FormEvent, PointerEvent } from "react";
import { useCallback, useId, useState } from 'react';
import { If } from "../If";
import { Input } from "../input/Input";
import { EditList, EditItem } from "../edit-list/EditList";
import { useEntryItem } from "../entry-list/EntryList";

import styles from "./EntryForm.module.css";

interface Props {
    readonly value?: string;
}

export const EntryForm = ({ value }: Props) => {
    const {
        selected,
        onDeselect,
        onSelect,
        onEdit,
        onArchive,
        onUp,
        onDown
    } = useEntryItem();

    const formId = useId();
    const controlId = useId();
    const buttonId = useId();

    const onToggleClick = useCallback((e: PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (selected) {
            onDeselect();
        } else {
            onSelect();
        }
    }, [onSelect, onDeselect, selected]);

    const [editValue, setEditValue] = useState(value ?? '');

    const onChangeEdit = useCallback((v: string) => setEditValue(v), []);

    // FIXME wrap dispatch with selection logic

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'edit':
        case 'archive':
        case 'up':
        case 'down':
            e.preventDefault();
            onEdit(editValue);
            onDeselect();
            break;
        }

        switch (value) {
        case 'archive':
            onArchive();
            break;

        case 'up':
            if (onUp) {
                onUp();
            }
            break;

        case 'down':
            if (onDown) {
                onDown();
            }
            break;

        default:
            return;
        }
    },[onDeselect, onEdit, editValue, onArchive, onUp, onDown]);

    return <div className={styles.editFormWrapper}>
               <div className={styles.button}>
                   <button
                       id={buttonId}
                       onClick={onToggleClick}
                       aria-expanded={selected}
                       aria-controls={controlId}>
                       {selected ? <>+</> : <>-</>}
                   </button>
               </div>
               <div id={controlId} className={styles.editForm}>
                   <div className={styles.entry}>
                       <label className={styles.title} htmlFor={buttonId}>{value ?? '...'}</label>
                       <If cond={selected}>
                           <form id={formId} action="#" onSubmit={onSubmit}>
                               <Input value={value} onChange={onChangeEdit} />
                           </form>
                       </If>
                   </div>
                   <div className={styles.entry}>
                       <If cond={selected}>
                           <div className={styles.editMenu}>
                               <EditList>
                                   <EditItem>
                                       <button form={formId} value="edit">Edit</button>
                                   </EditItem>
                                   <EditItem>
                                       <button form={formId} disabled={!onArchive} value="archive">
                                           Archive
                                       </button>
                                   </EditItem>
                                   <EditItem>
                                       <button form={formId} disabled={!onUp} value="up">
                                           Up
                                       </button>
                                   </EditItem>
                                   <EditItem>
                                       <button form={formId} disabled={!onDown} value="down">
                                           Down
                                       </button>
                                   </EditItem>
                               </EditList>
                           </div>
                       </If>
                   </div>
               </div>
           </div>;
};
