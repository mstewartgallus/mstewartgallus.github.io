"use client";

import type { EntryFresh } from "@/lib/features/ten/tenSlice";

import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { useCallback, useMemo, useId, useState } from 'react';
import { If } from "../If";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./EntryForm.module.css";


interface FormButtonProps {
    disabled: boolean;

    id: string;
    value: string;

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
           <Button disabled={disabled || !onChange}>
            Submit
          </Button>
        </form>;
};

interface EditFormProps {
    value: string;
    disabled: boolean;
    selected: boolean;
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect: () => void;
}

const EditForm = ({
    value,
    disabled, onChange, selected, onSelect, onDeselect
}: EditFormProps) => {
    const formId = useId();
    const controlId = useId();
    const [editValue, setEditValue] = useState(value);

    const onToggleClick = useMemo(() => {
        if (!onSelect) {
            return;
        }
        return (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            if (selected) {
                onDeselect();
            } else {
                setEditValue(value);
                onSelect();
            }
        };
    }, [onSelect, onDeselect, selected, value]);

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        if (!target) {
            return;
        }
        e.preventDefault();
        setEditValue((target as HTMLInputElement).value);
    }, []);

    return <div className={styles.editableTitle}>
          <Button aria-label={selected ? 'Cancel' : 'Edit'}
                disabled={disabled}
                onClick={onToggleClick}
                aria-expanded={selected}
                aria-controls={controlId}>
                <Icon>{selected ? 'X' : '✎'}</Icon>
            </Button>
            <div id={controlId} className={styles.titleAndInput}>
                <If cond={!selected}>
                    <div className={styles.title}>{value}</div>
                </If>
                <If cond={selected}>
                    <input disabled={disabled} className={styles.input} form={formId} value={editValue} onChange={onChangeInput} />
                    <FormButton disabled={disabled} value={editValue} id={formId} onChange={onChange} onDeselect={onDeselect} />
                </If>
            </div>
        </div>;
};

type EntryProps = EntryFresh & {
    disabled: boolean;
    selected: boolean;
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect: () => void;
}

const Entry = ({
    created,
    value,
    disabled, onChange, selected, onSelect, onDeselect
}: EntryProps) => {
    const format = useMemo(() => new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    }), []);

    const createdDate = format.format(new Date(created));

    return <div>
        <EditForm value={value}
           disabled={disabled} selected={selected}
    onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />
        <div>{createdDate}</div>
        </div>;
};

interface Props {
    readonly item?: EntryFresh;

    readonly disabled: boolean;

    readonly selected: boolean;
    readonly onDeselect: () => void;
    readonly onSelect?: () => void;

    readonly onEdit?: (value: string) => void;
}

export const EntryForm = ({
    disabled,
    item,
    selected,
    onDeselect,
    onSelect,
    onEdit
}: Props) => {
    const hasItem = item !== undefined;
    return <div className={styles.entryForm}>
       <div className={styles.editForm}>
        {
            hasItem &&
                <Entry key={item.id}
                   {...item}
                   disabled={disabled} selected={selected}
                   onChange={onEdit} onSelect={onSelect} onDeselect={onDeselect} />
        }
        {
           !hasItem && <>...</>
        }
       </div>
    </div>;
}
