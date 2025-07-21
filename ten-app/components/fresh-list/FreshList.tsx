"use client";

import type { Id, Entry, Fresh } from "@/lib/features/ten/tenSlice";

import { useCallback, useMemo, useState } from 'react';
import { DndList, DndItem, useDndItem } from '../dnd-list/DndList';
import { FreshEditMaybe } from "../fresh-edit-maybe/FreshEditMaybe";

import styles from "./FreshList.module.css";

interface FreshItemProps {
    fresh: readonly (Fresh | null)[];
    selectionId?: Id;
    entryAtId: (id: Id) => Entry;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;

    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
}

const FreshItem = ({
    fresh, entryAtId, selectionId,

    onChangeId,
    onSelectId, onDeselect,

    onCreateIndex, onCompleteIndex
}: FreshItemProps) => {
    const { index, isDragging } = useDndItem();

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

    return <div className={styles.freshSlot}>
        <FreshEditMaybe disabled={isDragging}
            item={fresh[index] ?? undefined} selectionId={selectionId} entryAtId={entryAtId}
            onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect}
            onCreate={onCreate} onComplete={onComplete}
        />
        </div>;
};

interface Props {
    readonly fresh: readonly (Fresh | null)[];

    readonly entryAtId: (id: Id) => Entry;
    readonly newEntryId: Id;

    readonly onCreateIndex?: (index: number) => void;
    readonly onCompleteIndex?: (index: number) => void;

    readonly onChangeId?: (id: Id, value: string) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

export const FreshList = ({
    fresh, entryAtId, newEntryId,

    onChangeId,

    onCreateIndex, onCompleteIndex,
    onSwapIndices
}: Props) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const onCreateIndexSelect = useMemo(() => {
        if (!onCreateIndex) {
            return;
        }
        return (index: number) => {
            onCreateIndex(index);
            setSelectionId(newEntryId);
        };
    }, [newEntryId, onCreateIndex]);

    const keyOf = useCallback((index: number) => {
        const item = fresh[index];
        return item ? `id-${item.id}` : `indx-${index}`;
    }, [fresh]);

    return <DndList keyOf={keyOf} length={fresh.length} onSwapIndices={onSwapIndices}>
        <DndItem>
            <FreshItem fresh={fresh} entryAtId={entryAtId}
                onCreateIndex={onCreateIndexSelect} onCompleteIndex={onCompleteIndex}
                selectionId={selectionId ?? undefined}
                onChangeId={onChangeId}
                onSelectId={onSelectId} onDeselect={onDeselect} />
        </DndItem>
    </DndList>;
};
