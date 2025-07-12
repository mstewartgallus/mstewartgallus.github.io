"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useCallback, useState } from 'react';

import styles from './EntryList.module.css';

interface ItemProps {
    readonly children: ReactNode;
    readonly index: number;
}

interface ListProps {
    readonly children: ReactNode;
    readonly length: number;
    readonly onEditIndex: (index: number, value: string) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
}

interface ListContext {
    readonly selectedIndex?: number;
    readonly onDeselect: () => void;
    readonly onSelectIndex: (index: number) => void;
    readonly length: number;
    readonly onEditIndex: (index: number, value: string) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
}

interface ItemContext {
    readonly selected: boolean;
    readonly onDeselect: () => void;
    readonly onSelect: () => void;
    readonly onEdit: (value: string) => void;
    readonly onArchive: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

const EntryListContext = createContext<ListContext>({
    length: 0,
    onDeselect: () => {},
    onSelectIndex: () => {},
    onEditIndex: () => {},
    onArchiveIndex: () => {},
    onUpIndex: () => {},
   onDownIndex: () => {}
});
EntryListContext.displayName = 'EntryList';

const EntryItemContext = createContext<ItemContext>({
    selected: false,
    onDeselect: () => {},
    onSelect: () => {},
    onEdit: () => {},
    onArchive: () => {},
    onUp: () => {},
    onDown: () => {}
});
EntryItemContext.displayName = 'EntryItem';

export const useEntryItem = () => useContext(EntryItemContext);

export const EntryItem = ({ children, index }: ItemProps) => {
    const {
        selectedIndex,
        onDeselect,
        onSelectIndex,
        length,
        onEditIndex,
        onArchiveIndex,
        onUpIndex,
        onDownIndex
    } = useContext(EntryListContext);

    const selected = useMemo(() =>
        selectedIndex == index,
        [index, selectedIndex]);
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

    const handler = useMemo(() => ({
        selected,
        onDeselect,
        onSelect,
        onEdit,
        onArchive,
        onUp: maybeOnUp,
        onDown: maybeOnDown
    }), [
        selected,
        onDeselect,
        onSelect,
        onEdit,
        onArchive,
        maybeOnUp,
        maybeOnDown
    ]);

    return <li className={styles.entryItem}>
        <EntryItemContext.Provider value={handler}>
            {children}
        </EntryItemContext.Provider>
       </li>;
};

export const EntryList = ({
    children,
    length,
    onEditIndex, onArchiveIndex, onDownIndex, onUpIndex
}: ListProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const onSelectIndex = useCallback((index: number) => setSelectedIndex(index), []);
    const onDeselect = useCallback(() => setSelectedIndex(null), []);

    const handler = useMemo(() => ({
        selectedIndex: selectedIndex ?? undefined,
        onDeselect,
        onSelectIndex,
        length,
        onEditIndex,
        onArchiveIndex,
        onUpIndex,
        onDownIndex
    }), [
        selectedIndex,
        onDeselect,
        onSelectIndex,
        length,
        onEditIndex,
        onArchiveIndex,
        onUpIndex,
        onDownIndex
    ]);
    return <ul className={styles.entryList}>
               <EntryListContext.Provider value={handler}>
                   {children}
               </EntryListContext.Provider>
           </ul>;
};
