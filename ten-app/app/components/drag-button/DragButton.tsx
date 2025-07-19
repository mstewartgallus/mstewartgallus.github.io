"use client";

import type { MouseEvent, PointerEvent, ReactNode } from 'react';
import { useMemo } from 'react';

import styles from './DragButton.module.css';

interface Props {
    readonly children?: ReactNode;
    readonly dragging: boolean;

    readonly onToggle?: () => void;
}

export const DragButton = ({ children, dragging, onToggle }: Props) => {
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

    const onPointerDown = useMemo(() => {
        if (!onToggle) {
            return;
        }
        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            (e.target as Element).releasePointerCapture(e.pointerId);
            onToggle()
        };
    }, [onToggle]);

    return <div className={styles.grabberWrapper}>
           <button
                 className={styles.grabber}
                 aria-label="Reorder"
                 aria-expanded={dragging}
                 onPointerDown={onPointerDown}
                 onClick={onClick}
                 disabled={!onClick} >
                 {children}
            </button>
        </div>;
};
