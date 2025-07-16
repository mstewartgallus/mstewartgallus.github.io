"use client";

import type { ComponentType } from 'react';
import type { Id } from '@/types/ten';
import { useMemo, useState } from 'react';

import styles from './EntryList.module.css';

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export interface EntryItemProps {
    readonly id: Id;
    readonly value?: string;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
    readonly onDrop?: () => void;

    readonly onArchive?: () => void;
    readonly onUp?: () => void;
    readonly onDown?: () => void;
};

interface AdaptorProps {
    readonly children: ComponentType<EntryItemProps>;

    readonly id: Id;
    readonly value?: string;

    readonly index: number;
    readonly length: number;

    readonly dragIndex?: number;
    readonly onDragStartIndex?: (index: number) => void;
    readonly onDropIndex?: (index: number) => void;

    readonly onDragEnd?: () => void;

    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

const EntryItemAdaptor = ({
    children,
    id, value,
    index, length,

    dragIndex,
    onDragStartIndex,
    onDragEnd,

    onDropIndex,

    onArchiveIndex, onDownIndex, onUpIndex
}: AdaptorProps) => {
    const dragging = index === dragIndex;

    onDragEnd = dragging ? onDragEnd : undefined;
    onDropIndex = dragging ? undefined : onDropIndex;

    onArchiveIndex = value ? onArchiveIndex : undefined;
    onDownIndex = index < length - 1 ? onDownIndex : undefined;
    onUpIndex = index > 0 ? onUpIndex : undefined;

    const onDragStart = useBind(onDragStartIndex, index);
    const onDrop = useBind(onDropIndex, index);

    const onArchive = useBind(onArchiveIndex, index);
    const onDown = useBind(onDownIndex, index);
    const onUp = useBind(onUpIndex, index);

    const Child = children;
    return <Child
             id={id}
             value={value}
             onDragStart={onDragStart}
             onDragEnd={onDragEnd}
             onDrop={onDrop}

             onArchive={onArchive}
             onUp={onUp}
             onDown={onDown}
           />;
};

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly { readonly id: Id, readonly value: string | null }[];

    readonly onArchiveIndex?: (index: number) => void;
    readonly onUpIndex?: (index: number) => void;
    readonly onDownIndex?: (index: number) => void;
}

type StatefulProps = Props & {
    onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
};

type StatelessProps = Props & {
    dragIndex?: number;

    onDragStartIndex?: (index: number) => void;
    onDropIndex?: (index: number) => void;

    onDragEnd?: () => void;
}

const EntryListStateless = ({
    children,
    fresh,

    onArchiveIndex,
    onDownIndex, onUpIndex,

    dragIndex,
    onDragStartIndex, onDropIndex, onDragEnd
}: StatelessProps) => {
    const length = fresh.length;

    return <ul className={styles.entryList} data-anydragging={dragIndex !== undefined}
        >
        {
            fresh.map(({ id, value }, index) =>
                <li key={id} className={styles.entryItem}>
                  <EntryItemAdaptor
                      id={id}
                      value={value ?? undefined}

                      index={index}
                      length={length}

                      dragIndex={dragIndex}
                      onDragStartIndex={onDragStartIndex}
                      onDragEnd={onDragEnd}
                      onDropIndex={onDropIndex}

                      onArchiveIndex={onArchiveIndex}
                      onDownIndex={onDownIndex}
                      onUpIndex={onUpIndex}
                >{children}</EntryItemAdaptor>
                </li>)
        }
           </ul>;
};

export const EntryList = ({
    children,
    fresh,
    onArchiveIndex, onSwapIndices, onDownIndex, onUpIndex
}: StatefulProps) => {
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const dragging = dragIndex != null;

    const onDragStartIndex = useMemo(() => {
        if (dragging) {
            return;
        }
        return (index: number) => setDragIndex(index);
    }, [dragging]);

    const onDragEnd = useMemo(() => {
        if (!dragging) {
            return;
        }

        return () => setDragIndex(null);
    }, [dragging]);

    const onDropIndex = useMemo(() => {
        if (!onSwapIndices) {
            return;
        }

        if (dragIndex === null) {
            return;
        }

        return (index: number) => {
            onSwapIndices(dragIndex, index);
            setDragIndex(null);
        };
    }, [dragIndex, onSwapIndices]);

    return <EntryListStateless
       fresh={fresh}
       onArchiveIndex={onArchiveIndex} onDownIndex={onDownIndex} onUpIndex={onUpIndex}
       dragIndex={dragIndex ?? undefined}
       onDragStartIndex={onDragStartIndex} onDropIndex={onDropIndex}
       onDragEnd={onDragEnd}
        >{children}</EntryListStateless>;
};
