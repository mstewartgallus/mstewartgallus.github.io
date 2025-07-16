"use client";

import type { FormEvent, MouseEvent, TouchEvent, ReactNode } from 'react';
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
    const onTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        onDragStart();
    }, [onDragStart]);

    const onMouseDown = useCallback((e: MouseEvent<HTMLElement>) => {
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
           <div className={styles.grabber}
              onTouchStart={onTouchStart}
              onMouseDown={onMouseDown}
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

interface DropProps {
    children: ReactNode;
    onDrop?: () => void;
}
const DropZone = ({ children, onDrop }: DropProps) => {
    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onTouchEnd = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return onDrop;
    }, [onDrop]);

    const onMouseUp = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }
            onDrop();
        };
    }, [onDrop]);

    const disabled = !onDrop;
    return <div className={styles.dropWrapper}>
        <div className={styles.dropZone} data-disabled={disabled ? "disabled" : undefined}
           onTouchEnd={onTouchEnd}
           onMouseUp={onMouseUp}
        />
        {children}
     </div>;

};

interface Props {
    readonly children: ReactNode;

    readonly dragging: boolean;

    readonly onDragStart: () => void;
    readonly onDrop?: () => void;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryItem = ({
    children,

    dragging,

    onDragStart, onDrop,

    onArchive, onUp, onDown
}: Props) => {
    // FIXME not sure a form is the right semantics here
    // FIXME rework grabber to integrated into the form system
    const formId = useId();

    return <DropZone onDrop={onDrop}>
         <div className={styles.entryItem}>
             <ItemControls
               id={formId}

               dragging={dragging}
               otherDragging={!!onDrop}
               onDragStart={onDragStart}

               onArchive={onArchive}
               onUp={onUp}
               onDown={onDown}
           />
          {children}
        </div>
      </DropZone>;
};
