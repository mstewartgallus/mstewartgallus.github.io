"use client";

import type { ChangeEvent, FormEvent, PointerEvent } from "react";
import { useCallback, useId, useState } from 'react';
import { If } from "../If";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./EntryForm.module.css";

interface EditFormProps {
    readonly disabled: boolean;
    readonly selected: boolean;
    readonly value?: string;
    readonly onChange?: (value: string) => void;
    readonly onSelect: () => void;
    readonly onDeselect: () => void;
}

interface FormButtonProps {
    disabled: boolean;
    value: string;
    id: string;
    onChange?: (value: string) => void;
    onDeselect?: () => void;
}

const FormButton = ({ disabled, value, id, onChange, onDeselect }: FormButtonProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        if (!onChange || !onDeselect) {
            return;
        }
        e.preventDefault();
        onChange(value);
        onDeselect();
    }, [onDeselect, onChange, value]);

    return <form className={styles.editMenu} id={id} action="#" onSubmit={onSubmit}>
        <Button disabled={disabled || !onChange}><Icon>✔</Icon></Button>
        </form>;
};

const EditForm = ({ disabled, value, onChange, selected, onSelect, onDeselect }: EditFormProps) => {
    const formId = useId();
    const controlId = useId();
    const buttonId = useId();

    const [editValue, setEditValue] = useState(value ?? '');

    const onToggleClick = useCallback((e: PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (selected) {
            onDeselect();
        } else {
            setEditValue(value ?? '');
            onSelect();
        }
    }, [onSelect, onDeselect, selected, value]);

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        if (!target) {
            return;
        }
        e.preventDefault();
        setEditValue((target as HTMLInputElement).value);
    }, []);

    const icon = selected ? 'X' : value ? '✎' : '+';
    return <>
        <div className={styles.editableTitle}>
             <Button id={buttonId}
                    disabled={disabled}
                    onClick={onToggleClick}
                    aria-expanded={selected}
                    aria-controls={controlId}>
                <Icon>{icon}</Icon>
            </Button>
            <div id={controlId} className={styles.titleAndInput}>
                <div className={styles.title}>{value ?? '...'}</div>
                <If cond={selected}>
                    <div className={styles.inputWrapper}>
                       <input disabled={disabled} className={styles.input} form={formId} value={editValue} onChange={onChangeInput} />
                    </div>
                </If>
            </div>
        </div>
        <div className={styles.menuWrapper}>
           <If cond={selected}>
               <FormButton disabled={disabled} value={editValue} id={formId} onChange={onChange} onDeselect={onDeselect} />
           </If>
        </div>
    </>;
};

interface Props {
    readonly value?: string;

    readonly disabled: boolean;

    readonly selected: boolean;
    readonly onDeselect: () => void;
    readonly onSelect: () => void;

    readonly onEdit?: (value: string) => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryForm = ({
    disabled,
    value,
    selected,
    onDeselect,
    onSelect,
    onEdit
}: Props) =>
    <div className={styles.entryForm}>
       <div className={styles.editForm}>
         <EditForm disabled={disabled} selected={selected} value={value} onChange={onEdit} onSelect={onSelect} onDeselect={onDeselect} />
       </div>
    </div>;
