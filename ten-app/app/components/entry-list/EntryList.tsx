"use client";

import type { ComponentType, MouseEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';

import styles from './EntryList.module.css';

interface CloseProps {
    readonly onSelect: () => void;
    readonly onEdit?: (value: string) => void;
    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

interface ExtraProps {
    readonly onDeselect: () => void;
    readonly value?: string;
    readonly selected: boolean;
}

export type EntryItemProps = CloseProps & ExtraProps;

type ItemProps = ExtraProps & {
    readonly children: ComponentType<EntryItemProps>;
    readonly index: number;
    readonly draggingIndex?: number;
    readonly onDragIndex: (index: number | null) => void;
    readonly onSelectIndex: (index: number) => void;

    readonly onSwapIndex?: (leftIndex: number, rightIndex: number) => void;
    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly { readonly id: number, readonly value: string | null }[];
    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
    readonly onSwapIndex?: (leftIndex: number, rightIndex: number) => void;
}

const useBind = (f: undefined | ((index: number) => void), index: number) => {
    return useMemo(() => f ? (() => f(index)) : undefined, [f, index]);
};


const EntryItem = ({
    children,
    index,
    selected,
    value,
    draggingIndex,
    onDragIndex,
    onDeselect,
    onSwapIndex,
    onSelectIndex,
    onEditIndex, onArchiveIndex,
    onDownIndex, onUpIndex
}: ItemProps) => {
    const dragging = draggingIndex === index;
    const anyDragging = draggingIndex !== undefined;
    const otherDragging = anyDragging && !dragging;

    const onSelect = useCallback(() => onSelectIndex(index), [index, onSelectIndex]);

    const onArchive = useBind(onArchiveIndex, index);
    const onDown = useBind(onDownIndex, index);
    const onUp = useBind(onUpIndex, index);

    const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0) {
            return;
        }

        e.preventDefault();
        onDragIndex(index);
    }, [index, onDragIndex]);

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onMouseUp = useMemo(() => {
        if (!onSwapIndex) {
            return;
        }

        if (draggingIndex === undefined || draggingIndex === index) {
            return undefined;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            onSwapIndex(draggingIndex, index);
        };
    }, [index, draggingIndex, onSwapIndex]);

    const onEdit = useMemo(() => {
        if (!onEditIndex) {
            return;
        }
        return (value: string) => onEditIndex(index, value);
    }, [index, onEditIndex]);

    const Child = children;
    return <li className={styles.entryItem}
             data-otherdragging={otherDragging}

             onMouseUp={onMouseUp}
        >
        <div className={styles.grabberWrapper}>
            <div className={styles.grabber} onMouseDown={onMouseDown} data-dragging={dragging}>
                <div className={styles.grabberIcon}>::</div>
            </div>
        </div>

        <Child
             value={value}
             selected={selected}
             onDeselect={onDeselect}
             onSelect={onSelect}
             onEdit={onEdit}
             onArchive={onArchive}
             onUp={onUp}
             onDown={onDown}
           />
       </li>;
};

export const EntryList = ({
    children,
    fresh,
    onEditIndex, onArchiveIndex,
    onSwapIndex, onDownIndex, onUpIndex
}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [draggingIndex, setDragIndex] = useState<number | null>(null);

    const onSelectIndex = useCallback((index: number) => setSelectedIndex(index), []);
    const onDeselect = useCallback(() => setSelectedIndex(null), []);

    const onDragIndex = useCallback((index: number | null) => setDragIndex(index), []);

    const onMouseUp = useCallback((e: MouseEvent<HTMLElement>) => {
        if (e.button !== 0) {
            return;
        }

        setDragIndex(null);
    }, []);

    return <ul className={styles.entryList} data-anydragging={draggingIndex !== null}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        >
        {
            fresh.map(({ id, value }, index) =>
                <EntryItem key={id}
                      index={index}
                      value={value ?? undefined}
                      selected={selectedIndex === index}
                      draggingIndex={draggingIndex ?? undefined}
                      onDragIndex={onDragIndex ?? undefined}
                      onSwapIndex={onSwapIndex}

                      onDeselect={onDeselect}
                      onSelectIndex={onSelectIndex}
                      onEditIndex={onEditIndex}
                      onArchiveIndex={onArchiveIndex}
                      onDownIndex={index < fresh.length - 1 ? onDownIndex : undefined}
                      onUpIndex={index > 0 ? onUpIndex : undefined}
                >{children}</EntryItem>)
        }
           </ul>;
};
