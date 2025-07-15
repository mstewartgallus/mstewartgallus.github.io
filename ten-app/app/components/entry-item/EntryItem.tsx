"use client";

import type { FormEvent, MouseEvent, ReactNode } from 'react';
import { useCallback, useMemo, useId } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from './EntryItem.module.css';

interface Props {
    readonly children: ReactNode;

    readonly dragging: boolean;
    readonly anyDragging: boolean;
    readonly onDragStart: () => void;

    readonly onSwap?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryItem = ({
    children,

    dragging,
    anyDragging,

    onDragStart,

    onSwap, onUp, onDown
}: Props) => {
    const otherDragging = anyDragging && !dragging;

    const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0) {
            return;
        }

        e.preventDefault();
        onDragStart();
    }, [onDragStart]);

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onMouseUp = useMemo(() => {
        if (!onSwap) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            onSwap();
        };
    }, [onSwap]);

    // FIXME not sure a form is the right semantics here
    const formId = useId();

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
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
    }, [onUp, onDown]);

    // FIXME rework grabber to integrated into the form system
    return <li className={styles.entryItem}
             data-otherdragging={otherDragging}
             onMouseUp={onMouseUp}
        >
        <div className={styles.grabberWrapper}>
           <div className={styles.grabber} onMouseDown={onMouseDown}
              data-dragging={dragging} data-anydragging={anyDragging}>
              <div className={styles.grabberIcon}>=</div>
           </div>
        </div>
        {children}
        <form onSubmit={onSubmit} id={formId} action="#" className={styles.entryForm}>
           <div className={styles.moveButtons}>
              <Button value="up"><Icon>↑</Icon></Button>
              <Button value="down"><Icon>↓</Icon></Button>
           </div>
        </form>
       </li>;
};
