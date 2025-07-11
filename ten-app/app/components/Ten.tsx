"use client";

import {
    select,
    edit,
    archive,
    up,
    down,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useReducer, useState } from 'react';
import { EntryItem, EntryList } from './entry-list/EntryList';
import { Entry } from './Entry';

export const Ten = () => {
    const dispatch = useAppDispatch();

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const [selectedId, setSelectedId] = useState(null);

    const onSelectId = useCallback(id => {
        setSelectedId(selectedId => selectedId === id ? null : id);
    }, []);

    const onEditId = useCallback((id, value) => {
        dispatch(edit({ id, value }));
        setSelectedId(null);
    }, []);

    const onArchiveIndex = useCallback((index, value) => {
        dispatch(archive({ index, value }));
        setSelectedId(null);
    }, []);
    const onUpIndex = useCallback(index => {
        dispatch(up({ index }));
    }, []);
    const onDownIndex = useCallback(index => {
        dispatch(down({ index }));
    }, []);

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
                           fresh.map(({ id, value, selected }, index) =>
                               <EntryItem
                                     key={id}
                                     index={index}
                                     id={id} value={value}
                                     selected={id === selectedId}
                               />)
                       }
                   </EntryList>
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       {
                           archived.map(({ id, value }, index) =>
                               <li key={id}>{value}</li>)
                       }
                   </ul>
               </section>
           </div>;
};
