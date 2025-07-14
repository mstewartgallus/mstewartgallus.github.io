"use client";

import type {
    ReactNode,
    DetailedHTMLProps, ButtonHTMLAttributes, ChangeEvent, FormEvent, PointerEvent
} from "react";
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

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({children, ...props}: ButtonProps) =>
    <div className={styles.editButtonWrapper}>
        <button {...props} className={styles.editButton}>
            {children}
        </button>
    </div>;

interface IconProps {
    readonly children: ReactNode;
}
const Icon = ({children}: IconProps) =>
    <div className={styles.editButtonIcon}>
       {children}
    </div>;

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
        <Button onClick={onToggle}>
            <Icon>{open ? <>▼</> : <>▶</>}</Icon>
        </Button>
        <If cond={open}>
            <form action="#" onSubmit={onSubmit}>
                <EditList>
                    <EditItem>
                        <Button disabled={!onArchive} value="archive">
                            Archive
                        </Button>
                    </EditItem>
                    <EditItem>
                        <Button disabled={!onUp} value="up">
                            <Icon>⇑</Icon>
                        </Button>
                    </EditItem>
                    <EditItem>
                        <Button disabled={!onDown} value="down">
                            <Icon>⇓</Icon>
                        </Button>
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
            <Button id={buttonId}
                    onClick={onToggleClick}
                    aria-expanded={selected}
                    aria-controls={controlId}>
        <Icon>{
            selected ?
                <>-</> :
            value ?
                <>✎</> :
                <>+</>
        }</Icon>
            </Button>
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
                   <Button>Finish Edit</Button>
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
        <EditForm selected={selected} value={value} onChange={onEdit} onSelect={onSelect} onDeselect={onDeselect} />
        <SecondaryForm onArchive={value ? onArchive : undefined} onDown={onDown} onUp={onUp} />
    </div>;
