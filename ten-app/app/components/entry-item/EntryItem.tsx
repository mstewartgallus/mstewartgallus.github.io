"use client";

import type { FormEvent, TouchEvent, MouseEvent, ReactNode } from 'react';
import { useCallback, useMemo, useId, useRef } from 'react';
import { Button } from "../button/Button";

import styles from './EntryItem.module.css';

interface GrabberProps {
    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
    readonly onDrop?: () => void;
}

const Grabber = ({ onDragStart, onDragEnd }: GrabberProps) => {
    const ref = useRef<HTMLButtonElement | null>(null);

    const draggable = !!onDragStart;

    const onToggle = onDragStart || onDragEnd;

    const onClick = useMemo(() => {
        if (!onToggle) {
            return;
        }
        return (e: MouseEvent<HTMLButtonElement>) => {
            if (e.button !== 0) {
                return;
            }
            e.preventDefault();
            onToggle();
        };
    }, [onToggle]);

    const onMouseDown = useMemo(() => {
        if (!draggable) {
            return;
        }
        return (e: MouseEvent<HTMLButtonElement>) => {
            if (e.button !== 0) {
                return;
            }

            const { current } = ref;
            if (!current) {
                return;
            }

            e.preventDefault();
            current.click();
        };
    }, [draggable]);

    return <div className={styles.grabberWrapper}>
          <button ref={ref} className={styles.grabber}
                   aria-expanded={!!onDragEnd}
                   disabled={onClick ? undefined : true}
                   onMouseDown={onMouseDown}
                   onClick={onClick}>
        <div className={styles.grabberIcon}>=</div>
        </button>
        </div>;
};

interface DropProps {
    children: ReactNode;
    onDrop?: () => void;
}

const DropZone = ({ children, onDrop }: DropProps) => {
    const disabled = !onDrop;

    const ref = useRef<HTMLButtonElement | null>(null);

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onClick = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            e.preventDefault();
            onDrop();
        };
    }, [onDrop]);

    const onMouseUp = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            const { current } = ref;
            if (!current) {
                return;
            }

            e.preventDefault();
            current.click();
        };
    }, [onDrop]);
    const onTouchStart = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: TouchEvent<HTMLElement>) => {
            const { current } = ref;
            if (!current) {
                return;
            }

            e.preventDefault();
            current.click();
        };
    }, [onDrop]);

    return <div className={styles.dropWrapper}>
        <button className={styles.dropZone}
           ref={ref}
           disabled={disabled ? true : undefined}
           onMouseUp={onMouseUp}
           onTouchStart={onTouchStart}
           onClick={onClick}
        ></button>
        {children}
     </div>;

};

interface ControlProps {
    readonly id: string;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;

    readonly onArchive?: () => void;
};

const ItemControls = ({
    id,

    onDragStart,
    onDragEnd,

    onArchive,
}: ControlProps) => {
    const disabled = !onDragStart;

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'archive':
            if (onArchive) {
                e.preventDefault();
                onArchive();
            }
            break;

        default:
            return;
        }
    }, [onArchive]);

    return <form onSubmit={onSubmit} id={id} action="#" className={styles.entryForm}>
        <Grabber onDragStart={onDragStart} onDragEnd={onDragEnd} />
        <Button disabled={disabled || !onArchive} value="archive">Archive</Button>
     </form>;
};

interface Props {
    readonly children: ReactNode;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
    readonly onDrop?: () => void;

    readonly onArchive?: () => void;
}

export const EntryItem = ({
    children,


    onDragStart, onDragEnd,
    onDrop,

    onArchive
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
           />
          {children}
        </div>
      </DropZone>;
};
