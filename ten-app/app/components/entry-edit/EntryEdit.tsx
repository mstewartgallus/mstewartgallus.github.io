"use client";

import type { Entry } from "@/lib/features/ten/tenSlice";

import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { useMemo, useId, useState } from 'react';
import { If } from "../If";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./EntryEdit.module.css";

interface FormButtonProps {
    value: string;

    onChange?: (value: string) => void;
}

const FormButton = ({ value, onChange }: FormButtonProps) => {
    const [editValue, setEditValue] = useState(value);

    const formId = useId();

    const onChangeInput = useMemo(() => {
        if (!onChange) {
            return;
        }
        return (e: ChangeEvent<HTMLInputElement>) => {
            const { target } = e;
            if (!target) {
                return;
            }
            e.preventDefault();
            setEditValue((target as HTMLInputElement).value);
        };
    }, [onChange]);

    const onSubmitForm = useMemo(() => {
        if (!onChange) {
            return;
        }
        return (e: FormEvent) => {
            e.preventDefault();
            onChange(editValue);
        };
    }, [editValue, onChange]);

    return <form className={styles.formButton} id={formId} action="#" onSubmit={onSubmitForm}>
            <input disabled={!onChangeInput} className={styles.input} value={editValue} onChange={onChangeInput} />
            <Button disabled={!onSubmitForm}>
                Submit
            </Button>
        </form>;
};

interface EditFormProps {
    value: string;
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect?: () => void;
}

const EditForm = ({
    value,
    onChange, onSelect, onDeselect
}: EditFormProps) => {
    const selected = !onSelect;

    const onToggle = onSelect || onDeselect;

    const onSubmit = useMemo(() => {
        if (!onChange || !onDeselect) {
            return;
        }
        return (value: string) => {
            onChange(value);
            onDeselect();
        };
    }, [onChange, onDeselect]);

    const controlId = useId();

    const onToggleClick = useMemo(() => {
        if (!onToggle) {
            return;
        }
        return (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            onToggle();
        };
    }, [onToggle]);

    return <div className={styles.editableTitle}>
          <Button aria-label={selected ? 'Cancel' : 'Edit'}
                disabled={!onToggleClick}
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
                   <FormButton value={value} onChange={onSubmit} />
                </If>
            </div>
        </div>;
};

type Props = Entry & {
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect?: () => void;
}

export const EntryEdit = ({
    value, created,
    onChange, onSelect, onDeselect
}: Props) => {
    const format = useMemo(() => new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    }), []);

    const createdDate = format.format(new Date(created));

    return <div>
        <EditForm value={value}
           onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />
        <div>Created: {createdDate}</div>
        </div>;
};
