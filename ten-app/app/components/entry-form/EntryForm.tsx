"use client";

import type { ChangeEvent, FormEvent, PointerEvent } from "react";
import { useCallback, useId, useState } from 'react';
import { If } from "../If";
import { EditList, EditItem } from "../edit-list/EditList";

import styles from "./EntryForm.module.css";

interface EditFormProps {
    readonly value?: string;
    readonly onChange: (value: string) => void;
    readonly selected: boolean;
    readonly onSelect: () => void;
    readonly onDeselect: () => void;
}

interface SecondaryFormProps {
    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

const SecondaryForm = ({ onArchive, onUp, onDown }: SecondaryFormProps) => {
    const [open, setOpen] = useState(false);
    const onToggle = useCallback((e: PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(o => !o);
    }, []);

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'archive':
            if (onArchive) {
                e.preventDefault();
                onArchive();
            }
            break;

        case 'up':
            if (onUp) {
                e.preventDefault();
                onUp();
            }
            break;

        case 'down':
            if (onDown) {
                e.preventDefault();
                onDown();
            }
            break;

        default:
            return;
        }
    }, [onArchive, onUp, onDown]);

    return <div className={styles.options}>
             <button onClick={onToggle}>
                {open ? <>+</> : <>-</>}
             </button>
        <If cond={open}>
            <form action="#" onSubmit={onSubmit}>
                <EditList>
                    <EditItem>
                        <button disabled={!onArchive} value="archive">
                            Archive
                        </button>
                    </EditItem>
                    <EditItem>
                        <button disabled={!onUp} value="up">
                            ↑
                        </button>
                    </EditItem>
                    <EditItem>
                        <button disabled={!onDown} value="down">
                            ↓
                        </button>
                    </EditItem>
                </EditList>
             </form>
        </If>
        </div>;
};

const EditForm = ({ value, onChange, selected, onSelect, onDeselect }: EditFormProps) => {
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

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        if (!target) {
            return;
        }
        e.preventDefault();
        setEditValue((target as HTMLInputElement).value);
    }, []);

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        onChange(editValue);
        onDeselect();
    }, [onDeselect, onChange, editValue]);

    return <div className={styles.editForm}>
        <div className={styles.editableTitle}>
            <button
                className={styles.editButton}
                id={buttonId}
                onClick={onToggleClick}
                aria-expanded={selected}
                aria-controls={controlId}>
                {selected ? <>+</> : <>✎</>}
            </button>
            <div id={controlId} className={styles.titleAndInput}>
                <div className={styles.title}>{value ?? '...'}</div>
                <If cond={selected}>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} form={formId} value={editValue} onChange={onChangeInput} />
                    </div>
                </If>
            </div>
        </div>
        <div className={styles.menuWrapper}>
            <form className={styles.editMenu} id={formId} action="#" onSubmit={onSubmit}>
               <If cond={selected}>
                   <button>Finish Edit</button>
                </If>
            </form>
        </div>
    </div>;
};

interface Props {
    readonly value?: string;
    readonly selected: boolean;
    readonly onDeselect: () => void;
    readonly onSelect: () => void;
    readonly onEdit: (value: string) => void;
    readonly onArchive: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryForm = ({
    value,
    selected,
    onDeselect,
    onSelect,
    onEdit,
    onArchive,
    onUp,
    onDown
}: Props) =>
    <div className={styles.entryForm}>
    <EditForm selected={selected} value={value} onChange={onEdit}
onSelect={onSelect} onDeselect={onDeselect} />
    <SecondaryForm onArchive={value ? onArchive : undefined} onDown={onDown} onUp={onUp} />
    </div>;
