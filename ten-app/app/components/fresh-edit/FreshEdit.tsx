"use client";

import type { Id, Entry } from "@/lib/features/ten/tenSlice";

import { useMemo } from 'react';

import { CompleteForm } from "../slot-controls/SlotControls";
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

interface Props {
    disabled: boolean;

    id: Id;
    selectionId?: Id;
    entryAtId: (id: Id) => Entry;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;

    onComplete?: () => void;
}

export const FreshEdit = ({
    disabled,

    id, selectionId,

    entryAtId,
    onChangeId,
    onSelectId, onDeselect: onDeselectX,

    onComplete
}: Props) => {
    const {
        onSelect, onDeselect, onChange
    } = useFreshEditState({
        id, selectionId,
        onChangeId,
        onSelectId, onDeselect: onDeselectX
    });

    const { value, created } = entryAtId(id);
    return <>
        <EntryEdit value={value} created={created}
    onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />
         <CompleteForm disabled={disabled} onComplete={onComplete} />
        </>;
};
