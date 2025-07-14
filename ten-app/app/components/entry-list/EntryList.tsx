"use client";

import type { ComponentType, DragEvent } from "react";
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
    readonly onSelectIndex: (index: number) => void;
    readonly onEditIndex: (index: number, value: string) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
    readonly onSwapIndex: (leftIndex: number, rightIndex: number) => void;
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
    onDeselect,
    index,
    length,
    onSelectIndex,
    onEditIndex, onArchiveIndex,
    onSwapIndex, onDownIndex, onUpIndex
}: ItemProps) => {
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

    // FIXME drag and drop is broken on Chrome
    const onDragStart = useCallback((e: DragEvent<HTMLLIElement>) => {
        const { dataTransfer } = e;
        if (!dataTransfer) {
            return;
        }

        dataTransfer.dropEffect = 'move';
        dataTransfer.effectAllowed = 'move';
        dataTransfer.setData('text/plain', String(index));
    }, [index]);

    const onDragOver = useCallback((e: DragEvent<HTMLLIElement>) => {
        const { dataTransfer } = e;
        if (!dataTransfer) {
            return;
        }

        if (dataTransfer.dropEffect !== 'move') {
            return;
        }

        const startIndex = parseInt(dataTransfer.getData('text/plain'));
        if (Number.isNaN(startIndex)) {
            return;
        }

        e.preventDefault();
    },[]);

    const onDragDrop = useCallback((e: DragEvent<HTMLLIElement>) => {
        const { dataTransfer } = e;
        if (!dataTransfer) {
            return;
        }

        e.preventDefault();

        const startIndex = parseInt(dataTransfer.getData('text/plain'));
        onSwapIndex(startIndex, index);
    }, [index, onSwapIndex]);

    // FIXME grabber maybe shouldn't be a button
    const Child = children;
    return <li className={styles.entryItem}
               onDragStart={onDragStart}
               onDragOver={onDragOver}
               onDrop={onDragDrop}>
        <div className={styles.grabberWrapper}>
            <button className={styles.grabber} draggable="true" tabIndex={-1}>::</button>
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

    const onSelectIndex = useCallback((index: number) => setSelectedIndex(index), []);
    const onDeselect = useCallback(() => setSelectedIndex(null), []);

    const length = fresh.length;

    return <ul className={styles.entryList}>
        {
            fresh.map(({ id, value }, index) =>
                <EntryItem key={id}
                      index={index}
                      length={length}
                      onDeselect={onDeselect}
                      onSelectIndex={onSelectIndex}
                      onEditIndex={onEditIndex}
                      onArchiveIndex={onArchiveIndex}
                      onSwapIndex={onSwapIndex}
                      onDownIndex={onDownIndex}
                      onUpIndex={onUpIndex}
                      value={value ?? undefined}
                      selected={selectedIndex === index}
                >{children}</EntryItem>)
        }
           </ul>;
};
