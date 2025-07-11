import { useState, useCallback } from "react";
import { If } from "../If";
import { Input } from "../input/Input";
import { EditList, EditItem } from "../edit-list/EditList";
import styles from "./EntryForm.module.css";

export const EntryForm = ({
    value, onChange,
    open,
    onArchive, onUp, onDown,
    controlId, buttonId
}) => {
    const [editValue, setEditValue] = useState(value ?? '');

    const onChangeEdit = useCallback(v => setEditValue(v), []);

    const onSubmit = useCallback(e => {
        const value = e.nativeEvent.submitter.value;
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
