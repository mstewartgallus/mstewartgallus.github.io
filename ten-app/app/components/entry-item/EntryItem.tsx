"use client";

import type { FormEvent, DragEvent, ReactNode } from 'react';
import { useCallback, useMemo, useId, useState } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import styles from './EntryItem.module.css';

interface ControlProps {
    readonly id: string;
    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
};

const ItemControls = ({
    id,

    onDragStart,
    onDragEnd,

    onArchive,
    onUp,
    onDown
}: ControlProps) => {
    const freeToDrag = !!onDragStart;
    const dragging = !!onDragEnd;

    const onDragHandler = useMemo(() => {
        if (!freeToDrag) {
            return;
        }
        return () => {
        };
    }, [freeToDrag]);

    const onDragStartHandler = useMemo(() => {
        if (!onDragStart) {
            return;
        }
        return (e: DragEvent<HTMLDivElement>) => {
            e.dataTransfer.effectAllowed = 'move';
            onDragStart();
        };
    }, [onDragStart]);

    const onDragEndHandler = useMemo(() => {
        if (!onDragEnd) {
            return;
        }
        return (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            onDragEnd();
        };
    }, [onDragEnd]);

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
        <div className={styles.grabber} draggable="true"
              onDrag={onDragHandler}
              onDragStart={onDragStartHandler} onDragEnd={onDragEndHandler}
              data-dragging={dragging} tabIndex={-1}>
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
    const disabled = !onDrop;

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onDropHandler = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: DragEvent<HTMLElement>) => {
            if (e.dataTransfer.dropEffect !== 'move') {
                return;
            }

            e.preventDefault();
            onDrop();
        };
    }, [onDrop]);

    const onDragOver = useMemo(() => {
        if (disabled) {
            return;
        }

        return (e: DragEvent<HTMLElement>) => {
            if (e.dataTransfer.dropEffect !== 'move') {
                return;
            }

            e.preventDefault();
        };
    }, [disabled]);

    const [hover, setHover] = useState(false);

    const onDragEnter = useMemo(() => {
        if (disabled) {
            return;
        }

        return (e: DragEvent<HTMLElement>) => {
            if (e.dataTransfer.dropEffect !== 'move') {
                return;
            }

            setHover(true);
        };
    }, [disabled]);

    const onDragLeave = useCallback(() => setHover(false), []);

    return <div className={styles.dropWrapper}>
        <div className={styles.dropZone}
           data-disabled={disabled ? 'disabled' : undefined}
           data-hover={hover ? 'hover' : undefined}
           onDrop={onDropHandler}
           onDragOver={onDragOver}
           onDragEnter={onDragEnter}
           onDragLeave={onDragLeave}
           tabIndex={-1}
        />
        {children}
     </div>;

};

interface Props {
    readonly children: ReactNode;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
    readonly onDrop?: () => void;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

export const EntryItem = ({
    children,


    onDragStart, onDragEnd,
    onDrop,

    onArchive, onUp, onDown
}: Props) => {
    // FIXME not sure a form is the right semantics here
    // FIXME rework grabber to integrated into the form system
    const formId = useId();

    return <DropZone onDrop={onDrop}>
         <div className={styles.entryItem}>
             <ItemControls
               id={formId}

               onDragStart={onDragStart}
               onDragEnd={onDragEnd}

               onArchive={onArchive}
               onUp={onUp}
               onDown={onDown}
           />
          {children}
        </div>
      </DropZone>;
};
