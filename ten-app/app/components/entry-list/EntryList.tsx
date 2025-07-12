"use client";

import type { ReactNode } from "react";
import type { Id } from "@/types/ten";
import { createContext, useContext, useMemo, useCallback } from 'react';
import { Entry } from "../entry/Entry";
import styles from './EntryList.module.css';

interface Props {
    readonly index: number;
    readonly id: Id;
    readonly value?: string;
    readonly selected: boolean;
}

interface ListProps {
    readonly children: ReactNode;
    readonly onEditId: (id: Id, value: string) => void;
    readonly onSelectId: (id: Id) => void;
    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
}

interface Context {
    readonly onSelectId: (id: Id) => void;
    readonly onEditId: (id: Id, value: string) => void;

    readonly onArchiveIndex: (index: number) => void;
    readonly onUpIndex: (index: number) => void;
    readonly onDownIndex: (index: number) => void;
}

const EntryContext = createContext<Context>({
    onSelectId: () => {},
    onEditId: () => {},
    onArchiveIndex: () => {},
    onUpIndex: () => {},
    onDownIndex: () => {}
});
EntryContext.displayName = 'EntryContext';

export const EntryItem = ({ index, id, value, selected }: Props) => {
    const {
        onEditId, onArchiveIndex, onUpIndex, onDownIndex, onSelectId
    } = useContext(EntryContext);

    const onToggleEntry = useCallback(() => onSelectId(id),
                                      [id, onSelectId]);
    const onEditEntry = useCallback((value: string) =>
        onEditId(id, value),
        [id, onEditId]);
    const onArchiveEntry = useCallback(() =>
        onArchiveIndex(index),
        [index, onArchiveIndex]);
    const onDownEntry = useCallback(() =>
        onDownIndex(index),
        [index, onDownIndex]);
    const onUpEntry = useCallback(() =>
        onUpIndex(index),
        [index, onUpIndex]);

    return <li className={styles.entryItem}>
               <Entry
                   value={value} onChange={onEditEntry}
                   open={selected}
                   onToggle={onToggleEntry}
                   onArchive={onArchiveEntry}
                   onUp={onUpEntry}
                   onDown={onDownEntry}
               />
           </li>;
};

export const EntryList = ({
    children,
    onEditId, onArchiveIndex, onDownIndex, onUpIndex, onSelectId
}: ListProps) => {
    const handler = useMemo(() => ({
        onSelectId,
        onEditId,
        onArchiveIndex,
        onUpIndex,
        onDownIndex
    }), [
        onSelectId,
        onEditId,
        onArchiveIndex,
        onUpIndex,
        onDownIndex
    ]);
    return <ul className={styles.entryList}>
               <EntryContext.Provider value={handler}>
                   {children}
               </EntryContext.Provider>
           </ul>;
};
