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
import { EntryForm, EntryItem, EntryList } from './entry-list/EntryList';

export const Ten = () => {
    const dispatch = useAppDispatch();

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const onEditIndex = useCallback((index: number, value: string) => {
        dispatch(edit({ index, value }));
    }, [dispatch]);

    const onArchiveIndex = useCallback((index: number) => {
        dispatch(archive({ index }));
    }, [dispatch]);
    const onUpIndex = useCallback((index: number) => {
        dispatch(up({ index }));
    }, [dispatch]);
    const onDownIndex = useCallback((index: number) => {
        dispatch(down({ index }));
    }, [dispatch]);

    return <div>
               <section>
                   <h1>Ten Things</h1>
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
           </div>;
};
