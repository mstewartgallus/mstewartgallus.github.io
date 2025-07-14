"use client";

import type { ComponentType, PointerEvent } from "react";
import { useCallback, useState } from 'react';

import styles from './EntryList.module.css';

interface CloseProps {
    readonly onSelect: () => void;
    readonly onEdit: (value: string) => void;
    readonly onArchive: () => void;
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
    readonly length: number;
    readonly anyDragging: boolean;
    readonly dragging: boolean;
    readonly onDragIndex: (index: number | null) => void;
    readonly onDropIndex: (index: number | null) => void;
    readonly onSelectIndex: (index: number) => void;
    readonly onEditIndex: (index: number, value: string) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
}

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly { readonly id: number, readonly value: string | null }[];
    readonly onEditIndex: (index: number, value: string) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
    readonly onSwapIndex: (leftIndex: number, rightIndex: number) => void;
}

const EntryItem = ({
    children,
    selected,
    value,
    anyDragging,
    dragging,
    onDragIndex,
    onDropIndex,
    onDeselect,
    index,
    length,
    onSelectIndex,
    onEditIndex, onArchiveIndex,
    onDownIndex, onUpIndex
}: ItemProps) => {
    const otherDragging = anyDragging && !dragging;

    const onSelect = useCallback(() =>
        onSelectIndex(index),
        [index, onSelectIndex]);
    const onEdit = useCallback((value: string) =>
        onEditIndex(index, value),
        [index, onEditIndex]);
    const onArchive = useCallback(() =>
        onArchiveIndex(index),
        [index, onArchiveIndex]);
    const onDown = useCallback(() =>
        onDownIndex(index),
        [index, onDownIndex]);
    const onUp = useCallback(() =>
        onUpIndex(index),
        [index, onUpIndex]);

    const maybeOnUp = index > 0 ? onUp : undefined;
    const maybeOnDown = index < length ? onDown : undefined;


    const onPointerDown = useCallback((e: PointerEvent<HTMLDivElement>) => {
        e.preventDefault();
        onDragIndex(index);
    }, [index, onDragIndex]);

    const onPointerEnter = useCallback((e: PointerEvent<HTMLLIElement>) => {
        e.preventDefault();
        onDropIndex(index);
    }, [index, onDropIndex]);
    const onPointerLeave = useCallback((e: PointerEvent<HTMLLIElement>) => {
        e.preventDefault();
        onDropIndex(null);
    }, [onDropIndex]);

    const Child = children;
    return <li className={styles.entryItem}
             data-otherdragging={otherDragging}
             onPointerEnter={onPointerEnter}
             onPointerLeave={onPointerLeave}
        >
        <div className={styles.grabberWrapper}>
        <div className={styles.grabber}
             onPointerDown={onPointerDown}
             data-dragging={dragging}>::</div>
        </div>

        <Child
             value={value}
             selected={selected}
             onDeselect={onDeselect}
             onSelect={onSelect}
             onEdit={onEdit}
             onArchive={onArchive}
             onUp={maybeOnUp}
             onDown={maybeOnDown}
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
    const [dropIndex, setDropIndex] = useState<number | null>(null);

    const onSelectIndex = useCallback((index: number) => setSelectedIndex(index), []);
    const onDeselect = useCallback(() => setSelectedIndex(null), []);

    const onDragIndex = useCallback((index: number | null) => setDragIndex(index), []);
    const onDropIndex = useCallback((index: number | null) => setDropIndex(index), []);

    const length = fresh.length;

    const onPointerCancel = useCallback(() => {
        setDragIndex(null);
        setDropIndex(null);
    }, []);

    const onPointerUp = useCallback((e: PointerEvent<HTMLElement>) => {
        if (draggingIndex === null || dropIndex === null || draggingIndex === dropIndex) {
            return;
        }
        e.preventDefault();

        onSwapIndex(draggingIndex, dropIndex);
        setDragIndex(null);
        setDropIndex(null);
    }, [onSwapIndex, draggingIndex, dropIndex]);

    return <ul className={styles.entryList} data-anydragging={draggingIndex !== null}
        onPointerCancel={onPointerCancel}
        onPointerUp={onPointerUp}
        >
        {
            fresh.map(({ id, value }, index) =>
                <EntryItem key={id}
                      index={index}
                      length={length}
                      value={value ?? undefined}
                      selected={selectedIndex === index}
                      anyDragging={draggingIndex !== null}
                      dragging={draggingIndex === index}
                      onDragIndex={onDragIndex}
                      onDropIndex={onDropIndex}
                      onDeselect={onDeselect}
                      onSelectIndex={onSelectIndex}
                      onEditIndex={onEditIndex}
                      onArchiveIndex={onArchiveIndex}
                      onDownIndex={onDownIndex}
                      onUpIndex={onUpIndex}
                >{children}</EntryItem>)
        }
           </ul>;
};
