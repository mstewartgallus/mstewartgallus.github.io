import type { MouseEvent } from "react";
import { useMemo, useId } from 'react';
import { If } from "../If";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { EditForm } from "../edit-form/EditForm";

import styles from "./EditFormMaybe.module.css";

interface Props {
    value: string;
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect?: () => void;
}

export const EditFormMaybe = ({
    value,
    onChange, onSelect, onDeselect
}: Props) => {
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
          <Button aria-label={selected ? 'Cancel Edit' : 'Edit'}
                disabled={!onToggleClick}
                onClick={onToggleClick}
                aria-expanded={selected}
                aria-controls={controlId}>
                <Icon>{selected ? '🗙' : '✎'}</Icon>
            </Button>
            <div id={controlId} className={styles.titleAndInput}>
                <If cond={!selected}>
                    <div className={styles.title}>{value}</div>
                </If>
                <If cond={selected}>
                   <EditForm value={value} onChange={onSubmit} />
                </If>
            </div>
        </div>;
};
