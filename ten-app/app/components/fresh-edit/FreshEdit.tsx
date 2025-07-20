"use client";

import type { Id, EntryFresh } from "@/lib/features/ten/tenSlice";

import { useMemo } from 'react';

import { EntryEdit } from "../entry-edit/EntryEdit";

interface FreshEditStateArgs {
    id: Id;

    onChangeId?: (id: Id, value: string) => void;

    selectionId?: Id;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

const useFreshEditState = ({
    id,
    onChangeId,
    selectionId,
    onSelectId, onDeselect
}: FreshEditStateArgs) => {
    const selected = selectionId === id;

    const onSelect = useMemo(() => {
        if (selected) {
            return;
        }
        return () => onSelectId(id);
    }, [id, selected, onSelectId]);

    const onChange = useMemo(() => {
        if (!onChangeId) {
            return;
        }
        return (value: string) => onChangeId(id, value);
    }, [id, onChangeId]);

    return {
        onSelect, onDeselect: selected ? onDeselect : undefined,
        onChange
    };
};

type Props = EntryFresh & {
    selectionId?: Id;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

export const FreshEdit = ({
    id, value, created,

    selectionId,

    onChangeId,
    onSelectId, onDeselect: onDeselectX
}: Props) => {
    const {
        onSelect, onDeselect, onChange
    } = useFreshEditState({
        id, selectionId,
        onChangeId,
        onSelectId, onDeselect: onDeselectX
    });
    return <EntryEdit value={value} created={created}
        onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />;
};
