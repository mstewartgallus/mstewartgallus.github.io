"use client";

import type { Id } from "@/types/ten";

import {
    edit,
    archive,
    swap,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo, useState } from 'react';
import { EntryList } from './entry-list/EntryList';
import { EntryItem } from './entry-item/EntryItem';
import { EntryForm } from './entry-form/EntryForm';
import { usePersistBootstrapped } from '../StoreProvider';

interface AdaptorProps {
    readonly disabled: boolean;

    readonly id: Id;
    readonly value?: string;

    readonly selectionId?: Id;

    readonly onEditId?: (id: Id, value: string) => void;
    readonly onSelectId: (id: Id) => void;
    readonly onDeselect: () => void;
}

const EntryFormAdaptor = ({
    disabled,
    id, value, selectionId,

    onEditId,
    onSelectId, onDeselect
}: AdaptorProps) => {
    const selected = selectionId === id;

    const onSelect = useCallback(() => onSelectId(id), [id, onSelectId]);

    const onEdit = useMemo(() => {
        if (!onEditId) {
            return;
        }
        return (value: string) => onEditId(id, value);
    }, [id, onEditId]);

    return <EntryForm disabled={disabled} value={value} selected={selected}
        onSelect={onSelect} onDeselect={onDeselect} onEdit={onEdit}
        />;
};

interface Props {
    readonly fresh: readonly { readonly id: number, readonly value: string | null }[];
    readonly archived: readonly { readonly id: number, readonly value: string | null }[];

    readonly onEditId?: (id: Id, value: string) => void;

    readonly onArchiveIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

const TenImpl = ({
    fresh, archived,
    onEditId, onArchiveIndex, onSwapIndices
}: Props) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const count = useMemo(() => fresh.reduce((x, y) => (y.value != null ? 1 : 0) + x, 0),
                          [fresh]);
    return <>
               <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       fresh={fresh}
                       onArchiveIndex={onArchiveIndex}
                       onSwapIndices={onSwapIndices}
        >{
            ({ id, value, ...props}) =>
                <EntryItem {...props}>
                <EntryFormAdaptor
                       disabled={!!props.onDrop || !props.onDragStart}
                       id={id} value={value}
                       selectionId={selectionId ?? undefined}
                       onEditId={onEditId}
                       onSelectId={onSelectId}
                       onDeselect={onDeselect}
                    />
                </EntryItem>
        }</EntryList>
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

    const onEditId = useCallback((id: Id, value: string) =>
        dispatch(edit({ id, value })),
        [dispatch]);
    const onArchiveIndex = useCallback((index: number) =>
        dispatch(archive({ index })),
        [dispatch]);
    const onSwapIndices = useCallback((leftIndex: number, rightIndex: number) =>
        dispatch(swap({ leftIndex, rightIndex })),
        [dispatch]);

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        fresh={bootstrapped ? fresh : mock}
        archived={bootstrapped ? archived : []}
        onEditId={bootstrapped ? onEditId : undefined}
        onArchiveIndex={bootstrapped ? onArchiveIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
