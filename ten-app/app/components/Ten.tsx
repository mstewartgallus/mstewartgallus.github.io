"use client";

import {
    edit,
    archive,
    up,
    down,
    selectEntries,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useReducer } from 'react';
import { EntryItem, EntryList } from './entry-list/EntryList';
import { Entry } from './Entry';

export const Ten = () => {
  const dispatch = useAppDispatch();
  const entries = useAppSelector(selectEntries);
  const fresh = useAppSelector(selectFresh);
  const archived = useAppSelector(selectArchived);

    const onEdit = useCallback((index, value) =>
        dispatch(edit({ index, value })),
        []);
    const onArchive = useCallback((index, value) =>
        dispatch(archive({ index, value })),
        []);
    const onUp = useCallback(index =>
        dispatch(up({ index })),
        []);
    const onDown = useCallback(index =>
        dispatch(down({ index })),
        []);

    return <div>
               <section>
                   <h1>Ten Things</h1>
                   <EntryList
                       onEdit={onEdit}
                       onArchive={onArchive}
                       onDown={onDown}
                       onUp={onUp}

                       fresh={fresh}
                       entries={entries}
                   >
                       {
                           fresh.map((id, index) =>
                               <EntryItem
                                   key={id}
                                   index={index}
                                   id={id}/>)
                       }
                   </EntryList>
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       {
                           archived.map((id, index) =>
                               <li key={id}>{entries[id]}</li>)
                       }
                   </ul>
               </section>
           </div>;
};
