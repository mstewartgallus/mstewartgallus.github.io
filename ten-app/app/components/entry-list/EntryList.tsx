"use client";

import type { Key, ComponentType, ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useCursor, useIsPrimaryPointerDown } from "../html/Html";
import { DragButton } from "../drag-button/DragButton";
import { DropButton } from "../drop-button/DropButton";

import styles from './EntryList.module.css';

interface ListContext {
    readonly dragIndex?: number;
    readonly onDragStartIndex?: (index: number) => void;
    readonly onDropIndex?: (index: number) => void;
    readonly onDragEnd?: () => void;
};

const ItemContext = createContext<number>(0);
ItemContext.displayName = 'ItemContext';

const ListContext = createContext<ListContext>({
});
ListContext.displayName = 'ListContext';

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

const useEntryItemState = () => {
    const index = useContext(ItemContext);
    const {
        dragIndex,
        onDragStartIndex,
        onDragEnd,
        onDropIndex
    } = useContext(ListContext);

    const dragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;

    const otherDragging = anyDragging && !dragging;

    const onDragStart = useBind(onDragStartIndex, index);
    let onDrop = useBind(onDropIndex, index);
    onDrop = otherDragging ? onDrop : undefined;

    const onToggle = otherDragging ? undefined : (onDragStart || onDragEnd);

    return { dragging, onToggle, onDrop };
};

const useEntryListState = (onSwapIndices?: (dragIndex: number, dropIndex: number) => void) => {
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const isPrimaryPointerDown = useIsPrimaryPointerDown();

    if (!isPrimaryPointerDown && dragIndex !== null) {
        setDragIndex(null);
    }

    useCursor(dragIndex !== null ? 'grabbing' : undefined);

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

    const context =  useMemo(() => ({
        dragIndex: dragIndex ?? undefined,
        onDragStartIndex,
        onDragEnd,
        onDropIndex,
    }), [
        dragIndex,
        onDragStartIndex, onDragEnd,
        onDropIndex,
    ]);

    return { dragIndex, context };
};

interface ItemProps {
    readonly children: ReactNode;
}

export const EntryItem = ({ children }: ItemProps) => {
    const { dragging, onDrop, onToggle } = useEntryItemState();
    return <div className={styles.entryItem}>
        <DropButton onDrop={onDrop} />
        <DragButton dragging={dragging} onToggle={onToggle}>
            <div className={styles.grabberIcon}>&</div>
        </DragButton>
        {children}
    </div>;
};

export interface EntryItemProps<T> {
    readonly item?: T;
    readonly disabled: boolean;
    readonly index: number;
};

interface Props<T> {
    keyOf: (x: T, index: number) => Key;
    children: ComponentType<EntryItemProps<T>>;
    fresh: readonly T[];

    onSwapIndices?: (dragIndex: number, dropIndex: number) => void;
}

export const EntryList = <T,>({
    children,
    keyOf,
    fresh,
    onSwapIndices
}: Props<T>) => {
    const {
        dragIndex,
        context
    } = useEntryListState(onSwapIndices);

    const Children = children;
    return <ul className={styles.entryList} role="list">
        <ListContext.Provider value={context}>
        {
            fresh.map((item, index) =>
                <li key={keyOf(item, index)} role="listitem" className={styles.entryItemWrapper}>
                    <ItemContext.Provider value={index}>
                        <Children item={item || undefined} disabled={dragIndex !== null} index={index} />
                    </ItemContext.Provider>
               </li>
            )
        }
        </ListContext.Provider>
    </ul>;
};
