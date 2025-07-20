"use client";

import { createContext, useContext, useMemo, useState } from 'react';
import { useIsPrimaryPointerDown } from "../html/Html";

interface ListContext {
    readonly dragIndex?: number;
    readonly onDragStartIndex?: (index: number) => void;
    readonly onDropIndex?: (index: number) => void;
    readonly onDragEnd?: () => void;
};

const ListContext = createContext<ListContext>({ });
ListContext.displayName = 'ListContext';

const ItemContext = createContext<number>(0);
ItemContext.displayName = 'ItemContext';

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export const useDndItemState = () => {
    const index = useContext(ItemContext);
    const {
        dragIndex,
        onDragStartIndex,
        onDragEnd,
        onDropIndex
    } = useContext(ListContext);

    const isDragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;

    const otherDragging = anyDragging && !isDragging;

    const onDragStart = useBind(onDragStartIndex, index);
    let onDrop = useBind(onDropIndex, index);
    onDrop = otherDragging ? onDrop : undefined;

    const onToggle = otherDragging ? undefined : (onDragStart || onDragEnd);

    return { index, isDragging, onToggle, onDrop };
};

export const useDndListState = (onSwapIndices?: (dragIndex: number, dropIndex: number) => void) => {
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const isPrimaryPointerDown = useIsPrimaryPointerDown();

    if (!isPrimaryPointerDown && dragIndex !== null) {
        setDragIndex(null);
    }

    const anyDragging = dragIndex !== null;

    const onDragStartIndex = useMemo(() => {
        if (anyDragging) {
            return;
        }
        return (index: number) => setDragIndex(index);
    }, [anyDragging]);

    const onDragEnd = useMemo(() => {
        if (!anyDragging) {
            return;
        }
        return () => setDragIndex(null);
    }, [anyDragging]);

    const onDropIndex = useMemo(() => {
        if (!onSwapIndices || !anyDragging) {
            return;
        }

        return (index: number) => {
            onSwapIndices(dragIndex, index);
            setDragIndex(null);
        }
    }, [dragIndex, onSwapIndices, anyDragging]);

    return useMemo(() => ({
        dragIndex: dragIndex ?? undefined,
        onDragStartIndex,
        onDragEnd,
        onDropIndex,
    }), [
        dragIndex,
        onDragStartIndex, onDragEnd,
        onDropIndex,
    ]);
};

export const DndListProvider = ListContext.Provider;
export const DndItemProvider = ItemContext.Provider;
