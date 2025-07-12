"use client";

import type { Id } from "@/types/ten";

import {
    edit,
    archive,
    up,
    down,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useState } from 'react';
import { EntryItem, EntryList } from './entry-list/EntryList';

export const Ten = () => {
    const dispatch = useAppDispatch();

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const [selectedId, setSelectedId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => {
        setSelectedId(selectedId => selectedId === id ? null : id);
    }, []);

    const onEditId = useCallback((id: Id, value: string) => {
        dispatch(edit({ id, value }));
        setSelectedId(null);
    }, [dispatch]);

    const onArchiveIndex = useCallback((index: number) => {
        dispatch(archive({ index }));
        setSelectedId(null);
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
                       onSelectId={onSelectId}
                       onEditId={onEditId}
                       onArchiveIndex={onArchiveIndex}
                       onDownIndex={onDownIndex}
                       onUpIndex={onUpIndex}
                   >
                       {
                           fresh.map(({ id, value }, index) =>
                               <EntryItem
                                     key={id}
                                     index={index}
                                     id={id} value={value ?? undefined}
                                     selected={id === selectedId}
                               />)
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
