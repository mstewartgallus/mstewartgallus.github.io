"use client";

import type { Id, EntryFresh } from "@/lib/features/ten/tenSlice";

import { useCallback, useMemo, useState } from 'react';
import { DndList, DndItem, useDndItem } from '../dnd-list/DndList';
import { SlotControls } from "../slot-controls/SlotControls";
import { FreshEditMaybe } from "../fresh-edit-maybe/FreshEditMaybe";

import styles from "./FreshList.module.css";

interface ControlsItemProps {
    hasItem: readonly boolean[];
    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
};

const ControlsItem = ({
    hasItem,
    onCreateIndex, onCompleteIndex
}: ControlsItemProps) => {
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

    return <SlotControls disabled={isDragging}
        onCreate={hasItem[index] ? undefined : onCreate}
        onComplete={hasItem[index] ? onComplete : undefined} />;
};

interface AdaptorProps {
    fresh: readonly (EntryFresh | null)[];

    selectionId?: Id;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

const Adaptor = ({
    fresh,
    selectionId,

    onChangeId,
    onSelectId, onDeselect
}: AdaptorProps) => {
    const { index } = useDndItem();
    return <FreshEditMaybe item={fresh[index] ?? undefined} selectionId={selectionId}
        onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect} />;
};

interface Props {
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
}: Props) => {
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
        return item ? `id-${item.id}` : `indx-${index}`;
    }, [fresh]);

    const hasItem = useMemo(() => fresh.map(x => x !== null), [fresh]);

    return <DndList keyOf={keyOf} length={fresh.length} onSwapIndices={onSwapIndices}>
        <DndItem>
            <div className={styles.freshSlot}>
               <Adaptor
                    fresh={fresh}
                selectionId={selectionId ?? undefined}
                onChangeId={onChangeId}
                onSelectId={onSelectId}
                onDeselect={onDeselect}
             />
              <ControlsItem hasItem={hasItem} onCreateIndex={onCreateIndex} onCompleteIndex={onCompleteIndex} />
            </div>
        </DndItem>
    </DndList>;
};
