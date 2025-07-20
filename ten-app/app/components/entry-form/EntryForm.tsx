"use client";

import type { EntryFresh } from "@/lib/features/ten/tenSlice";

import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { useCallback, useMemo, useId, useState } from 'react';
import { If } from "../If";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from "./EntryForm.module.css";

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

interface ControlProps {
    id: string;
    disabled: boolean;
    onCreate?: () => void;
    onComplete?: () => void;
};

const ItemControls = ({
    id,
    disabled,
    onCreate,
    onComplete,
}: ControlProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'complete':
            if (onComplete) {
                e.preventDefault();
                onComplete();
            }
            break;

            case 'create':
                if (onCreate) {
                    e.preventDefault();
                    onCreate();
                }
                break;

        default:
            return;
        }
    }, [onComplete, onCreate]);

    return <form id={id} onSubmit={onSubmit} action="#">
        {
            onCreate &&
                <Button disabled={disabled} aria-label="Create Task" value="create">
                    <Icon>+</Icon>
                </Button>
        }
        {
            onComplete &&
                <Button disabled={disabled} aria-label="Complete Task" value="complete">
                    <Icon>✔</Icon>
                </Button>
        }
     </form>;
};

type EntryProps = EntryFresh & {
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect?: () => void;
}

const Entry = ({
    created,
    value,onChange, onSelect, onDeselect
}: EntryProps) => {
    const format = useMemo(() => new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    }), []);

    const createdDate = format.format(new Date(created));

    return <div>
        <EditForm value={value}
           onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />
        <div>{createdDate}</div>
        </div>;
};

interface Props {
    readonly item?: EntryFresh;

    readonly disabled: boolean;

    readonly onDeselect?: () => void;
    readonly onSelect?: () => void;

    readonly onEdit?: (value: string) => void;

    readonly onCreate?: () => void;
    readonly onComplete?: () => void;
}

export const EntryForm = ({
    disabled,
    item,
    onDeselect,
    onSelect,
    onEdit,

    onCreate,
    onComplete
}: Props) => {
    const hasItem = item !== undefined;
    const formId = useId();
    return <div className={styles.entryForm}>
        <div className={styles.editForm}>
         {
             hasItem &&
                 <Entry key={item.id}
                    {...item}
                    onChange={onEdit} onSelect={onSelect} onDeselect={onDeselect}
                 />
         }
         {
            !hasItem && <>...</>
         }
         </div>
         <ItemControls id={formId} disabled={disabled}
             onCreate={hasItem ? undefined : onCreate}
             onComplete={hasItem ? onComplete : undefined}
     />
     </div>;
}
