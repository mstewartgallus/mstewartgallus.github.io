"use client";

import {
    edit,
    archive,
    up,
    down,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback } from 'react';
import { EntryItem, EntryList } from './entry-list/EntryList';
import { EntryForm } from './entry-form/EntryForm';

export const Ten = () => {
    const dispatch = useAppDispatch();

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const onEditIndex = useCallback((index: number, value: string) =>
        dispatch(edit({ index, value })),
        [dispatch]);
    const onArchiveIndex = useCallback((index: number) =>
        dispatch(archive({ index })),
        [dispatch]);
    const onUpIndex = useCallback((index: number) =>
        dispatch(up({ index })),
        [dispatch]);
    const onDownIndex = useCallback((index: number) =>
        dispatch(down({ index })),
        [dispatch]);

    const count = fresh.reduce((x, y) => (y.value != null ? 1 : 0) + x, 0);

    return <>
               <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       length={fresh.length}
                       onEditIndex={onEditIndex}
                       onArchiveIndex={onArchiveIndex}
                       onDownIndex={onDownIndex}
                       onUpIndex={onUpIndex}
                   >
                       {
                           fresh.map(({ id, value }, index) =>
                               <EntryItem key={id} index={index}>
                                    <EntryForm value={value ?? undefined} />
                               </EntryItem>)
                       }
                   </EntryList>
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       {
                           archived.map(({ id, value }) =>
                               <li key={id}>{value}</li>)
                       }
                   </ul>
               </section>
           </>;
};
