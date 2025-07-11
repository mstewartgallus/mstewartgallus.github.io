"use client";

import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { Entry } from "../entry/Entry";
import styles from './EntryList.module.css';

const iff = (cond, value) => cond ? value : undefined;

const EntryContext = createContext({
    selection: -1,
    entries: [],
    fresh: [],
    archived: [],
    onToggle: () => {},
    onEdit: () => {},
    onArchive: () => {},
    onUp: () => {},
    onDown: () => {},
});
EntryContext.displayName = 'EntryContext';


export const EntryItem = ({index}) => {
    const {
        selection,
        entries, fresh,
        onEdit, onArchive, onUp, onDown, onToggle
    } = useContext(EntryContext);

    const onToggleEntry = useCallback(() => onToggle(index),
                                      [index, onToggle]);
    const onEditEntry = useCallback(edit =>
        onEdit(index, edit),
        [index, onEdit]);
    const onArchiveEntry = useCallback(() =>
        onArchive(index),
        [index, onArchive]);
    const onDownEntry = useCallback(() =>
        onDown(index),
        [index, onDown]);
    const onUpEntry = useCallback(() =>
        onUp(index),
        [index, onUp]);

    const open = selection === index;
    const id = fresh[index];
    const value = entries[id];

    return <li className={styles.entryItem}>
               <Entry
                   value={value} onChange={onEditEntry}
                   open={open}
                   onToggle={onToggleEntry}
                   onArchive={onArchiveEntry}
                   onUp={iff(index > 0, onUpEntry)}
                   onDown={onDownEntry}
               />
           </li>;
};

export const EntryList = ({
    children,
    entries, fresh, archived,
    onEdit, onArchive, onDown, onUp
}) => {
    const [selection, onSelect] = useState(-1);

    const onToggleEntry = useCallback(index => {
        onSelect(selection => selection === index ? -1 : index);
    }, [onSelect]);

    const onEditEntry = useCallback((index, edit) => {
        onEdit(index, edit);
        onSelect(-1);
    }, [onEdit, onSelect]);
    const onArchiveEntry = useCallback(index => {
        onArchive(index);
        onSelect(-1);
    }, [onArchive, onSelect]);
    const onUpEntry = useCallback(index => {
        onUp(index);
        onSelect(-1);
    }, [onUp, onSelect]);
    const onDownEntry = useCallback(index => {
        onDown(index);
        onSelect(-1);
    }, [onDown, onSelect]);
    const handler = useMemo(() => ({
        selection,
        entries, fresh, archived,
        onToggle: onToggleEntry,
        onEdit: onEditEntry,
        onArchive: onArchiveEntry,
        onUp: onUpEntry,
        onDown: onDownEntry
    }), [
        selection,
        entries, fresh, archived,
        onToggleEntry,
        onEditEntry,
        onArchiveEntry,
        onDownEntry,
        onUpEntry
    ]);
    return <ul className={styles.entryList}>
               <EntryContext.Provider value={handler}>
                   {children}
               </EntryContext.Provider>
           </ul>;
};
