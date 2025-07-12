import type { FormEvent } from "react";

import { useState, useCallback } from "react";
import { If } from "../If";
import { Input } from "../input/Input";
import { EditList, EditItem } from "../edit-list/EditList";
import styles from "./EntryForm.module.css";

interface Props {
    readonly value?: string;
    readonly onChange: (value: string) => void;
    readonly open: boolean;

    readonly onArchive: () => void;
    readonly onUp: () => void;
    readonly onDown: () => void;

    readonly controlId: string;
    readonly buttonId: string;
}

export const EntryForm = ({
    value, onChange,
    open,
    onArchive, onUp, onDown,
    controlId, buttonId
}: Props) => {
    const [editValue, setEditValue] = useState(value ?? '');

    const onChangeEdit = useCallback((v: string) => setEditValue(v), []);

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'edit':
        case 'archive':
        case 'up':
        case 'down':
            e.preventDefault();
            onChange(editValue);
            break;
        }

        switch (value) {
        case 'archive':
            onArchive();
            break;

        case 'up':
            onUp();
            break;

        case 'down':
            onDown();
            break;

        default:
            return;
        }
    },[onChange, editValue, onArchive, onUp, onDown]);

    return <div className={styles.editForm}>
               <div className={styles.entry}>
                   <label className={styles.title} htmlFor={buttonId}>{value ?? '...'}</label>
                   <If cond={open}>
                       <form id={controlId} action="#" onSubmit={onSubmit}>
                           <Input value={value} onChange={onChangeEdit} />
                       </form>
                   </If>
               </div>
               <div className={styles.entry}>
                   <If cond={open}>
                       <div className={styles.editMenu}>
                           <EditList>
                               <EditItem>
                                   <button form={controlId} value="edit">Edit</button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onArchive} value="archive">
                                       Archive
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onUp} value="up">
                                       Up
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onDown} value="down">
                                       Down
                                   </button>
                               </EditItem>
                           </EditList>
                       </div>
                   </If>
               </div>
           </div>;
};
