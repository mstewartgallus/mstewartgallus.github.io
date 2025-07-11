"use client";

import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { Entry } from "../entry/Entry";
import styles from './EntryList.module.css';

const iff = (cond, value) => cond ? value : undefined;

const EntryContext = createContext({
    onSelectId: () => {},
    onEditId: () => {},
    onArchiveIndex: () => {},
    onUpIndex: () => {},
    onDownIndex: () => {},
});
EntryContext.displayName = 'EntryContext';

export const EntryItem = ({ index, id, value, selected }) => {
    const {
        onEditId, onArchiveIndex, onUpIndex, onDownIndex, onSelectId
    } = useContext(EntryContext);

    const onToggleEntry = useCallback(() => onSelectId(id),
                                      [id, onSelectId]);
    const onEditEntry = useCallback(edit =>
        onEditId(id, edit),
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
}) => {
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
