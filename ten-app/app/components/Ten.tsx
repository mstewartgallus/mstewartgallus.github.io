"use client";

import {
    edit,
    archive,
    swap,
    up,
    down,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo } from 'react';
import { EntryList } from './entry-list/EntryList';
import { EntryForm } from './entry-form/EntryForm';
import { PersistGate } from '../StoreProvider';

export const Ten = () => {
    const dispatch = useAppDispatch();

    const onEditIndex = useCallback((index: number, value: string) =>
        dispatch(edit({ index, value })),
        [dispatch]);
    const onArchiveIndex = useCallback((index: number) =>
        dispatch(archive({ index })),
        [dispatch]);
    const onSwapIndex = useCallback((leftIndex: number, rightIndex: number) =>
        dispatch(swap({ leftIndex, rightIndex })),
        [dispatch]);
    const onUpIndex = useCallback((index: number) =>
        dispatch(up({ index })),
        [dispatch]);
    const onDownIndex = useCallback((index: number) =>
        dispatch(down({ index })),
        [dispatch]);

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const count = useMemo(() => fresh.reduce((x, y) => (y.value != null ? 1 : 0) + x, 0),
                          [fresh]);

    return <>
               <section>
                   <h1>
                       <PersistGate loading={<>&nbsp;</>}>
                           {count}
                       </PersistGate> / 10
                   </h1>
                   <PersistGate loading={null}>
                   <EntryList
                       fresh={fresh}
                       onEditIndex={onEditIndex}
                       onArchiveIndex={onArchiveIndex}
                       onSwapIndex={onSwapIndex}
                       onDownIndex={onDownIndex}
                       onUpIndex={onUpIndex}>
                   {
                       ({ value,
                          selected,
                          onDeselect,
                          onSelect,
                          onEdit,
                          onArchive,
                          onUp,
                          onDown }) =>
                            <EntryForm
                                value={value}
                                selected={selected}
                                onDeselect={onDeselect}
                                onSelect={onSelect}
                                onEdit={onEdit}
                                onArchive={onArchive}
                                onUp={onUp}
                                onDown={onDown}
                            />
                   }
                   </EntryList>
                   </PersistGate>
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       <PersistGate loading={null}>
                       {
                           archived.map(({ id, value }) =>
                               <li key={id}>{value}</li>)
                       }
                       </PersistGate>
                   </ul>
               </section>
           </>;
};
