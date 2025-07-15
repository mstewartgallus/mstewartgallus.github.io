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
import { usePersistBootstrapped } from '../StoreProvider';

interface Props {
    readonly fresh: readonly { readonly id: number, readonly value: string | null }[];
    readonly archived: readonly { readonly id: number, readonly value: string | null }[];
    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

const TenImpl = ({
    fresh, archived,
    onEditIndex, onArchiveIndex, onSwapIndices, onUpIndex, onDownIndex
}: Props) => {
    const count = useMemo(() => fresh.reduce((x, y) => (y.value != null ? 1 : 0) + x, 0),
                          [fresh]);
    return <>
               <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       fresh={fresh}
                       onEditIndex={onEditIndex}
                       onArchiveIndex={onArchiveIndex}
                       onSwapIndices={onSwapIndices}
                       onDownIndex={onDownIndex}
                       onUpIndex={onUpIndex}
        >{EntryForm}</EntryList>
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

const mock = [
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null }
];

export const Ten = () => {
    const dispatch = useAppDispatch();

    const onEditIndex = useCallback((index: number, value: string) =>
        dispatch(edit({ index, value })),
        [dispatch]);
    const onArchiveIndex = useCallback((index: number) =>
        dispatch(archive({ index })),
        [dispatch]);
    const onSwapIndices = useCallback((leftIndex: number, rightIndex: number) =>
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

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        fresh={bootstrapped ? fresh : mock}
        archived={bootstrapped ? archived : []}
        onEditIndex={bootstrapped ? onEditIndex : undefined}
        onArchiveIndex={bootstrapped ? onArchiveIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        onDownIndex={bootstrapped ? onDownIndex : undefined}
        onUpIndex={bootstrapped ? onUpIndex : undefined}
        />;
};
