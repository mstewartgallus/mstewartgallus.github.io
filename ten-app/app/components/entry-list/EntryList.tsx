"use client";

import type { ComponentType, MouseEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { EntryItem } from "../entry-item/EntryItem";

import styles from './EntryList.module.css';

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export interface EntryItemProps {
    readonly value?: string;

    readonly selected: boolean;
    readonly onSelect: () => void;
    readonly onDeselect: () => void;

    readonly onEdit?: (value: string) => void;
    readonly onArchive?: () => void;
};

interface AdaptorProps {
    readonly children: ComponentType<EntryItemProps>;
    readonly value?: string;
    readonly index: number;
    readonly length: number;

    readonly selectionIndex?: number;
    readonly onSelectIndex: (index: number) => void;
    readonly onDeselect: () => void;

    readonly dragIndex?: number;
    readonly onDragStartIndex: (index: number) => void;

    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onSwapIndex?: (index: number) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

const EntryItemAdaptor = ({
    children,
    value,
    index, length,

    selectionIndex,
    onSelectIndex, onDeselect,

    dragIndex,
    onDragStartIndex,

    onEditIndex,
    onSwapIndex, onArchiveIndex,
    onDownIndex, onUpIndex
}: AdaptorProps) => {
    onSwapIndex = index === dragIndex ? undefined : onSwapIndex;
    onDownIndex = index < length - 1 ? onDownIndex : undefined;
    onUpIndex = index > 0 ? onUpIndex : undefined;

    const onSwap = useBind(onSwapIndex, index);

    const onDragStart = useCallback(() => onDragStartIndex(index), [index, onDragStartIndex]);
    const onSelect = useCallback(() => onSelectIndex(index), [index, onSelectIndex]);

    const onArchive = useBind(onArchiveIndex, index);
    const onDown = useBind(onDownIndex, index);
    const onUp = useBind(onUpIndex, index);

    const onEdit = useMemo(() => {
        if (!onEditIndex) {
            return;
        }
        return (value: string) => onEditIndex(index, value);
    }, [index, onEditIndex]);

    const Child = children;
    return <EntryItem
             dragging={dragIndex === index}
             anyDragging={dragIndex !== undefined}
             onDragStart={onDragStart}

             onSwap={onSwap}
             onUp={onUp}
             onDown={onDown}
           >
        <Child
             value={value}
             selected={selectionIndex === index}
             onDeselect={onDeselect}
             onSelect={onSelect}
             onEdit={onEdit}
             onArchive={value === undefined ? undefined : onArchive}
           />
       </EntryItem>;
};

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly { readonly id: number, readonly value: string | null }[];
    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

type StatefulProps = Props & {
    onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
};

type StatelessProps = Props & {
    dragIndex?: number;

    onDragStartIndex: (index: number) => void;
    onDragEnd: () => void;

    selectionIndex?: number;

    onSelectIndex: (index: number) => void;
    onDeselect: () => void;

    onSwapIndex?: (index: number) => void;
}

const EntryListStateless = ({
    children,
    fresh,
    onEditIndex, onArchiveIndex,
    onSwapIndex, onDownIndex, onUpIndex,

    dragIndex,
    onDragStartIndex, onDragEnd,

    selectionIndex,
    onSelectIndex, onDeselect
}: StatelessProps) => {
    const onMouseUp = useCallback((e: MouseEvent<HTMLElement>) => {
        if (e.button !== 0) {
            return;
        }

        onDragEnd();
    }, [onDragEnd]);

    const length = fresh.length;

    return <ul className={styles.entryList} data-anydragging={dragIndex !== undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        >
        {
            fresh.map(({ id, value }, index) =>
                <EntryItemAdaptor key={id}
                      index={index}
                      length={length}
                      value={value ?? undefined}

                      dragIndex={dragIndex}
                      onDragStartIndex={onDragStartIndex}

                      selectionIndex={selectionIndex}
                      onDeselect={onDeselect} onSelectIndex={onSelectIndex}

                      onSwapIndex={onSwapIndex}
                      onEditIndex={onEditIndex}
                      onArchiveIndex={onArchiveIndex}
                      onDownIndex={onDownIndex}
                      onUpIndex={onUpIndex}
                >{children}</EntryItemAdaptor>)
        }
           </ul>;
};

export const EntryList = ({
    children,
    fresh,
    onEditIndex, onArchiveIndex,
    onSwapIndices, onDownIndex, onUpIndex
}: StatefulProps) => {
    const [selectionIndex, setSelectedIndex] = useState<number | null>(null);
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const onSelectIndex = useCallback((index: number) => setSelectedIndex(index), []);
    const onDeselect = useCallback(() => setSelectedIndex(null), []);

    const onDragStartIndex = useCallback((index: number) => setDragIndex(index), []);
    const onDragEnd = useCallback(() => setDragIndex(null), []);

    const onSwapIndex = useMemo(() => {
        if (!onSwapIndices) {
            return;
        }
        if (dragIndex === null) {
            return;
        }

        return (index: number) => onSwapIndices(dragIndex, index);
    }, [dragIndex, onSwapIndices]);

    return <EntryListStateless
       fresh={fresh}
       onEditIndex={onEditIndex}
       onArchiveIndex={onArchiveIndex}
       onSwapIndex={onSwapIndex} onDownIndex={onDownIndex} onUpIndex={onUpIndex}

       selectionIndex={selectionIndex ?? undefined}
       onSelectIndex={onSelectIndex} onDeselect={onDeselect}

       dragIndex={dragIndex ?? undefined}
       onDragStartIndex={onDragStartIndex} onDragEnd={onDragEnd}
        >{children}</EntryListStateless>;
};
