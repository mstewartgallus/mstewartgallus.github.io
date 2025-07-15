"use client";

import type { FormEvent, MouseEvent, ReactNode } from 'react';
import { useCallback, useMemo, useId } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from './EntryItem.module.css';

interface ControlProps {
    readonly id: string;
    readonly onDragStart: () => void;

    readonly dragging: boolean;
    readonly otherDragging: boolean;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
};

const ItemControls = ({
    id,

    dragging,

    otherDragging,
    onDragStart,

    onArchive,
    onUp,
    onDown
}: ControlProps) => {
    const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0) {
            return;
        }

        e.preventDefault();
        onDragStart();
    }, [onDragStart]);

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

    return <form onSubmit={onSubmit} id={id} action="#" className={styles.entryForm}>
        <div className={styles.grabberWrapper}>
           <div className={styles.grabber} onMouseDown={onMouseDown}
              data-dragging={dragging} data-otherdragging={otherDragging}>
              <div className={styles.grabberIcon}>=</div>
           </div>
        </div>

        <div className={styles.moveButtons}>
            <Button disabled={!onUp} value="up"><Icon>↑</Icon></Button>
            <Button disabled={!onDown} value="down"><Icon>↓</Icon></Button>
        </div>

        <Button disabled={!onArchive} value="archive">Archive</Button>
     </form>;
};

interface Props {
    readonly children: ReactNode;

    readonly dragging: boolean;

    readonly onDragStart: () => void;
    readonly onDragEnd?: () => void;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryItem = ({
    children,

    dragging,

    onDragStart, onDragEnd,

    onArchive, onUp, onDown
}: Props) => {
    const otherDragging = !!onDragEnd;

    // FIXME not sure a form is the right semantics here
    const formId = useId();

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onMouseUp = useMemo(() => {
        if (!onDragEnd) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            onDragEnd();
        };
    }, [onDragEnd]);

    // FIXME rework grabber to integrated into the form system
    return <div className={styles.entryItem}
             data-otherdragging={otherDragging}
             onMouseUp={onMouseUp}
        >
        <ItemControls
          id={formId}

          dragging={dragging}
          otherDragging={otherDragging}
          onDragStart={onDragStart}

          onArchive={onArchive}
          onUp={onUp}
          onDown={onDown}
        />
        {children}
       </div>;
};
