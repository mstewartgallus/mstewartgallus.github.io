"use client";

import type { MouseEvent, PointerEvent, ReactNode } from 'react';
import { useMemo } from 'react';

import styles from './DropButton.module.css';

interface Props {
    readonly children?: ReactNode;
    readonly onDrop?: () => void;
}

export const DropButton = ({ children, onDrop }: Props) => {
    const onPointerUp = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            onDrop();
        };
    }, [onDrop]);

    const onClick = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: MouseEvent<HTMLButtonElement>) => {
            if (e.button !== 0) {
                return;
            }
            e.preventDefault();
            onDrop();
        };
    }, [onDrop]);

    return <button className={styles.dropZone}
            onPointerUp={onPointerUp}
            onClick={onClick}
            disabled={!onClick ? true : undefined}
        >
        {children}
     </button>;

};
