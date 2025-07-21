"use client";

import type { Id, Entry, Fresh } from "@/lib/features/ten/tenSlice";

import { useCallback, useMemo, useState } from 'react';
import { DndList, DndItem, useDndItem } from '../dnd-list/DndList';
import { CreateForm, CompleteForm } from "../slot-controls/SlotControls";
import { FreshEditMaybe } from "../fresh-edit-maybe/FreshEditMaybe";

import styles from "./FreshList.module.css";

interface CreateItemProps {
    hasItem: readonly boolean[];
    onCreateIndex?: (index: number) => void;
};

const CreateItem = ({ hasItem, onCreateIndex }: CreateItemProps) => {
    const { index, isDragging } = useDndItem();

    const onCreate = useMemo(() => {
        if (!onCreateIndex) {
            return;
        }
        return () => onCreateIndex(index);
    }, [index, onCreateIndex]);

    if (hasItem[index]) {
        return;
    }

    if (!onCreate) {
        return;
    }

    return <CreateForm disabled={isDragging} onCreate={onCreate} />;
};

interface CompleteItemProps {
    hasItem: readonly boolean[];
    onCompleteIndex?: (index: number) => void;
};

const CompleteItem = ({ hasItem, onCompleteIndex }: CompleteItemProps) => {
    const { index, isDragging } = useDndItem();

    const onComplete = useMemo(() => {
        if (!onCompleteIndex) {
            return;
        }
        return () => onCompleteIndex(index);
    }, [index, onCompleteIndex]);

    if (!hasItem[index]) {
        return;
    }

    if (!onComplete) {
        return;
    }

    return <CompleteForm disabled={isDragging} onComplete={onComplete} />;
};

interface AdaptorProps {
    fresh: readonly (Fresh | null)[];
    selectionId?: Id;
    entryAtId: (id: Id) => Entry;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

const Adaptor = ({
    fresh, entryAtId, selectionId,

    onChangeId,
    onSelectId, onDeselect
}: AdaptorProps) => {
    const { index } = useDndItem();
    return <FreshEditMaybe item={fresh[index] ?? undefined} selectionId={selectionId} entryAtId={entryAtId}
        onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect} />;
};

interface Props {
    readonly fresh: readonly (Fresh | null)[];

    readonly entryAtId: (id: Id) => Entry;
    readonly newEntryId: Id;

    readonly onCreateIndex?: (index: number) => void;
    readonly onChangeId?: (id: Id, value: string) => void;
    readonly onCompleteIndex?: (index: number) => void;
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

    const hasItem = useMemo(() => fresh.map(x => x !== null), [fresh]);

    return <DndList keyOf={keyOf} length={fresh.length} onSwapIndices={onSwapIndices}>
        <DndItem>
            <div className={styles.freshSlot}>
                <CreateItem hasItem={hasItem} onCreateIndex={onCreateIndexSelect} />

                <Adaptor
                    fresh={fresh} entryAtId={entryAtId}
                    selectionId={selectionId ?? undefined}
                    onChangeId={onChangeId}
                    onSelectId={onSelectId} onDeselect={onDeselect} />

                <CompleteItem hasItem={hasItem} onCompleteIndex={onCompleteIndex} />
            </div>
        </DndItem>
    </DndList>;
};
