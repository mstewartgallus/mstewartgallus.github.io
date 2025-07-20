"use client";

import type { Id, EntryFresh } from "@/lib/features/ten/tenSlice";

import { useCallback, useMemo, useState } from 'react';
import { EntryList, EntryItem } from '../entry-list/EntryList';
import { EntryForm } from '../entry-form/EntryForm';

interface AdaptorProps {
    item?: EntryFresh;
    disabled: boolean;

    selectionId?: Id;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;

    index: number;
    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
}

const EntryFormAdaptor = ({
   item, disabled, selectionId,

    onChangeId,
    onSelectId, onDeselect,

    index, onCreateIndex, onCompleteIndex
}: AdaptorProps) => {
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

    const id = item && item.id;
    const selected = id !== null && selectionId === id;

    const onSelect = useMemo(() => {
        if (id === undefined) {
            return;
        }
        if (selected) {
            return;
        }
        return () => onSelectId(id);
    }, [id, selected, onSelectId]);

    const onEdit = useMemo(() => {
        if (id === undefined) {
            return;
        }
        if (!onChangeId) {
            return;
        }
        return (value: string) => onChangeId(id, value);
    }, [id, onChangeId]);

    return <EntryForm disabled={disabled} item={item}
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

    return <EntryList
                       keyOf={(item, index) => item ? `id-${item.id}` : `index-${index}` }
                       fresh={fresh}
                       onSwapIndices={onSwapIndices}
        >{
            ({item, disabled, index}) =>
                <EntryItem>
                   <EntryFormAdaptor
                       item={item || undefined}
                       disabled={disabled}
                       selectionId={selectionId ?? undefined}
                       onChangeId={item ? onChangeId : undefined}
                       onSelectId={onSelectId}
                       onDeselect={onDeselect}
                       index={index}
                       onCreateIndex={item ? undefined : onCreateIndex}
                       onCompleteIndex={item ? onCompleteIndex: undefined}
                    />
                </EntryItem>
        }</EntryList>;
};
