"use client";

import type { ComponentType, MouseEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';

import styles from './EntryList.module.css';

interface CloseProps {
    readonly onSelect: () => void;
    readonly onEdit?: (value: string) => void;
    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
}

interface ExtraProps {
    readonly onDeselect: () => void;
    readonly value?: string;
    readonly selected: boolean;
}

export type EntryItemProps = CloseProps & ExtraProps;

type ItemProps = ExtraProps & {
    readonly children: ComponentType<EntryItemProps>;
    readonly index: number;

    readonly dragging: boolean;
    readonly anyDragging: boolean;

    readonly onDragStartIndex: (index: number) => void;
    readonly onDragEnd: (index: number) => void;
    readonly onSelectIndex: (index: number) => void;
    readonly onDeselect: () => void;

    readonly onEditIndex?: (index: number, value: string) => void;
    readonly onSwapIndex?: (index: number) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

const EntryItem = ({
    children,
    index,
    value,

    selected,
    onSelectIndex, onDeselect,

    dragging,
    anyDragging,

    onDragStartIndex,

    onEditIndex,
    onSwapIndex, onArchiveIndex,
    onDownIndex, onUpIndex
}: ItemProps) => {
    const otherDragging = anyDragging && !dragging;

    const onSwap = useBind(onSwapIndex, index);

    const onDragStart = useBind(onDragStartIndex, index);
    const onSelect = useCallback(() => onSelectIndex(index), [index, onSelectIndex]);

    const onArchive = useBind(onArchiveIndex, index);
    const onDown = useBind(onDownIndex, index);
    const onUp = useBind(onUpIndex, index);

    const onMouseDown = useMemo(() => {
        if (!onDragStart) {
            return;
        }

        return (e: MouseEvent<HTMLDivElement>) => {
            if (e.button !== 0) {
                return;
            }

            e.preventDefault();
            onDragStart();
        };
    }, [onDragStart]);

    // Still need to figure this out for why it doesn't work on mobile
    // in Chrome simulator
    const onMouseUp = useMemo(() => {
        if (!onSwap) {
            return;
        }

        return (e: MouseEvent<HTMLElement>) => {
            if (e.button !== 0) {
                return;
            }

            onSwap();
        };
    }, [onSwap]);

    const onEdit = useMemo(() => {
        if (!onEditIndex) {
            return;
        }
        return (value: string) => onEditIndex(index, value);
    }, [index, onEditIndex]);

    const Child = children;
    return <li className={styles.entryItem}
             data-otherdragging={otherDragging}

             onMouseUp={onMouseUp}
        >
        <div className={styles.grabberWrapper}>
            <div className={styles.grabber} onMouseDown={onMouseDown} data-dragging={dragging}>
                <div className={styles.grabberIcon}>::</div>
            </div>
        </div>

        <Child
             value={value}
             selected={selected}
             onDeselect={onDeselect}
             onSelect={onSelect}
             onEdit={onEdit}
             onArchive={onArchive}
             onUp={onUp}
             onDown={onDown}
           />
       </li>;
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

    return <ul className={styles.entryList} data-anydragging={dragIndex !== undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        >
        {
            fresh.map(({ id, value }, index) =>
                <EntryItem key={id}
                      index={index}
                      value={value ?? undefined}

                      dragging={dragIndex === index}
                      anyDragging={dragIndex !== undefined}
                      onDragStartIndex={onDragStartIndex} onDragEnd={onDragEnd}

                      selected={selectionIndex === index}
                      onDeselect={onDeselect} onSelectIndex={onSelectIndex}

                      onSwapIndex={index === dragIndex ? undefined : onSwapIndex}

                      onEditIndex={onEditIndex}
                      onArchiveIndex={onArchiveIndex}
                      onDownIndex={index < fresh.length - 1 ? onDownIndex : undefined}
                      onUpIndex={index > 0 ? onUpIndex : undefined}
                >{children}</EntryItem>)
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
