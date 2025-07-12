"use client";

import type { ReactNode, FormEvent, PointerEvent } from "react";
import { createContext, useContext, useMemo, useCallback, useId, useState } from 'react';
import { If } from "../If";
import { Input } from "../input/Input";
import { EditList, EditItem } from "../edit-list/EditList";

import styles from './EntryList.module.css';
import formStyles from "./EntryForm.module.css";
import entryStyles from './Entry.module.css';

interface FormProps {
    readonly value?: string;
}

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

export const EntryForm = ({ value }: FormProps) => {
    const {
        selected,
        onDeselect,
        onSelect,
        onEdit,
        onArchive,
        onUp,
        onDown
    } = useContext(EntryItemContext);

    const formId = useId();
    const controlId = useId();
    const buttonId = useId();

    const onToggleClick = useCallback((e: PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (selected) {
            onDeselect();
        } else {
            onSelect();
        }
    }, [onSelect, onDeselect, selected]);

    const [editValue, setEditValue] = useState(value ?? '');

    const onChangeEdit = useCallback((v: string) => setEditValue(v), []);

    // FIXME wrap dispatch with selection logic

    const onSubmit = useCallback((e: FormEvent) => {
        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'edit':
        case 'archive':
        case 'up':
        case 'down':
            e.preventDefault();
            onEdit(editValue);
            onDeselect();
            break;
        }

        switch (value) {
        case 'archive':
            onArchive();
            break;

        case 'up':
            if (onUp) {
                onUp();
            }
            break;

        case 'down':
            if (onDown) {
                onDown();
            }
            break;

        default:
            return;
        }
    },[onDeselect, onEdit, editValue, onArchive, onUp, onDown]);

    return  <div className={entryStyles.editFormWrapper}>
               <div className={entryStyles.button}>
                   <button
                       id={buttonId}
                       onClick={onToggleClick}
                       aria-expanded={selected}
                       aria-controls={controlId}
                   >
                       {selected ? <>+</> : <>-</>}
                   </button>
               </div>
        <div id={controlId}>
        <div className={formStyles.editForm}>
               <div className={formStyles.entry}>
                   <label className={formStyles.title} htmlFor={buttonId}>{value ?? '...'}</label>
                   <If cond={selected}>
                       <form id={formId} action="#" onSubmit={onSubmit}>
                           <Input value={value} onChange={onChangeEdit} />
                       </form>
                   </If>
               </div>
               <div className={formStyles.entry}>
                   <If cond={selected}>
                       <div className={formStyles.editMenu}>
                           <EditList>
                               <EditItem>
                                   <button form={formId} value="edit">Edit</button>
                               </EditItem>
                               <EditItem>
                                   <button form={formId} disabled={!onArchive} value="archive">
                                       Archive
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={formId} disabled={!onUp} value="up">
                                       Up
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={formId} disabled={!onDown} value="down">
                                       Down
                                   </button>
                               </EditItem>
                           </EditList>
                       </div>
                   </If>
               </div>
        </div>
               </div>
           </div>;
};


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
