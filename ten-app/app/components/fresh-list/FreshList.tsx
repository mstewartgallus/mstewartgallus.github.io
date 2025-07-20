"use client";

import type { Id, EntryFresh } from "@/lib/features/ten/tenSlice";

import { useCallback, useMemo, useState } from 'react';
import { EntryList, EntryItem, useEntryItem } from '../entry-list/EntryList';
import { EntryForm } from '../entry-form/EntryForm';

interface AdaptorProps {
    fresh: readonly (EntryFresh | null)[];

    selectionId?: Id;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;

    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
}

const EntryFormAdaptor = ({
    fresh,
    selectionId,

    onChangeId,
    onSelectId, onDeselect,

    onCreateIndex, onCompleteIndex
}: AdaptorProps) => {
    const { index, disabled } = useEntryItem();

    const onCreate = useMemo(() => {
        if (!onCreateIndex) {
            return;
        }
        return () => onCreateIndex(index);
    }, [index, onCreateIndex]);

    const onComplete = useMemo(() => {
        if (!onCompleteIndex) {
            return;
        }
        return () => onCompleteIndex(index);
    }, [index, onCompleteIndex]);

    const item = fresh[index];

    const id = item ? item.id : null;
    const selected = id !== null && selectionId === id;

    const onSelect = useMemo(() => {
        if (id === null) {
            return;
        }
        if (selected) {
            return;
        }
        return () => onSelectId(id);
    }, [id, selected, onSelectId]);

    const onEdit = useMemo(() => {
        if (id === null) {
            return;
        }
        if (!onChangeId) {
            return;
        }
        return (value: string) => onChangeId(id, value);
    }, [id, onChangeId]);

    return <EntryForm disabled={disabled} item={item ?? undefined}
         onSelect={onSelect} onDeselect={selected ? onDeselect : undefined}
         onEdit={onEdit}
        onCreate={onCreate} onComplete={onComplete}
        />;
};

interface FreshListProps {
    readonly fresh: readonly (EntryFresh | null)[];

    readonly createIndex?: (index: number) => Id;
    readonly onChangeId?: (id: Id, value: string) => void;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

export const FreshList = ({
    fresh,
    onChangeId,
    createIndex, onCompleteIndex,
    onSwapIndices
}: FreshListProps) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const onCreateIndex = useMemo(() => {
        if (!createIndex) {
            return;
        }
        return (index: number) => setSelectionId(createIndex(index));
    }, [createIndex]);

    const keyOf = useCallback((index: number) => {
        const item = fresh[index];
        return item ? `id-${item.id}` : `index-${index}`;
    }, [fresh]);

    return <EntryList keyOf={keyOf} length={fresh.length} onSwapIndices={onSwapIndices}>
        <EntryItem>
            <EntryFormAdaptor
                fresh={fresh}
                selectionId={selectionId ?? undefined}
                onChangeId={onChangeId}
                onSelectId={onSelectId}
                onDeselect={onDeselect}
                onCreateIndex={onCreateIndex}
                onCompleteIndex={onCompleteIndex}
             />
         </EntryItem>
    </EntryList>;
};
