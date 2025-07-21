"use client";

import type { Key, ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';
import { useCursor } from "../html/Html";
import { DragButton } from "../drag-button/DragButton";
import { DropButton } from "../drop-button/DropButton";
import {
    DndListProvider, DndItemProvider,
    useDndListState, useDndItemState
} from "./DndProviders";

import styles from './DndList.module.css';

interface ItemChildrenContext {
    index: number;
    isDragging: boolean;
}

const ItemChildrenContext = createContext<ItemChildrenContext>({
    index: 0,
    isDragging: false
});
ItemChildrenContext.displayName = `ItemChildrenContext`;

export const useDndItem = () => useContext(ItemChildrenContext);

interface ItemProps {
    readonly children: ReactNode;
}

export const DndItem = ({ children }: ItemProps) => {
    const { index, isDragging, onDrop, onDragStart, onToggle } = useDndItemState();
    const context = useMemo(() => ({ isDragging, index }), [ isDragging, index ]);
    return <li role="listitem" className={styles.item}>
        <DropButton onDrop={onDrop} />
        <DragButton dragging={isDragging}
            onDragStart={onDragStart} onToggle={onToggle}>
            <div className={styles.grabberIcon}>&</div>
        </DragButton>
        <ItemChildrenContext.Provider value={context}>
            {children}
        </ItemChildrenContext.Provider>
    </li>;
};

interface Props {
    children: ReactNode;
    length: number;
    keyOf: (index: number) => Key;
    onSwapIndices?: (dragIndex: number, dropIndex: number) => void;
}

export const DndList = ({
    children,
    keyOf,
    length,
    onSwapIndices
}: Props) => {
    const context = useDndListState(onSwapIndices);

    const { dragIndex } = context;
    useCursor(dragIndex !== undefined ? 'grabbing' : undefined);

    return <ul className={styles.list} role="list">
        <DndListProvider value={context}>
        {
            Array(length).fill(null).map((x, index) =>
                <DndItemProvider key={keyOf(index)} value={index}>
                    {children}
                </DndItemProvider>)
        }
        </DndListProvider>
    </ul>;
};
