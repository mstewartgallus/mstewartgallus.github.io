"use client";

import type { ComponentType, MouseEvent } from 'react';
import type { Id } from '@/types/ten';
import { useCallback, useMemo, useState } from 'react';

import styles from './EntryList.module.css';

const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export interface EntryItemProps {
    readonly id: Id;
    readonly value?: string;

    readonly dragging: boolean;
    readonly onDragStart: () => void;
    readonly onDragEnd?: () => void;

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
    readonly onDragStartIndex: (index: number) => void;
    readonly onDragEndIndex?: (index: number) => void;

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
    onDragEndIndex,

    onArchiveIndex, onDownIndex, onUpIndex
}: AdaptorProps) => {
    onArchiveIndex = value ? onArchiveIndex : undefined;
    onDragEndIndex = index === dragIndex ? undefined : onDragEndIndex;
    onDownIndex = index < length - 1 ? onDownIndex : undefined;
    onUpIndex = index > 0 ? onUpIndex : undefined;

    const onDragEnd = useBind(onDragEndIndex, index);

    const onArchive = useBind(onArchiveIndex, index);
    const onDown = useBind(onDownIndex, index);
    const onUp = useBind(onUpIndex, index);

    const onDragStart = useCallback(() => onDragStartIndex(index), [index, onDragStartIndex]);

    const Child = children;
    return <Child
             id={id}
             value={value}
             dragging={dragIndex === index}
             onDragStart={onDragStart}
             onDragEnd={onDragEnd}

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

    onDragStartIndex: (index: number) => void;
    onDragEndIndex?: (index: number) => void;

    onDragAbort: () => void;
}

const EntryListStateless = ({
    children,
    fresh,

    onArchiveIndex,
    onDownIndex, onUpIndex,

    dragIndex,
    onDragStartIndex, onDragEndIndex, onDragAbort
}: StatelessProps) => {
    const onMouseUp = useCallback((e: MouseEvent<HTMLElement>) => {
        if (e.button !== 0) {
            return;
        }

        onDragAbort();
    }, [onDragAbort]);

    const length = fresh.length;

    return <ul className={styles.entryList} data-anydragging={dragIndex !== undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
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
                      onDragEndIndex={onDragEndIndex}

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

    const onDragStartIndex = useCallback((index: number) => setDragIndex(index), []);
    const onDragAbort = useCallback(() => setDragIndex(null), []);

    const onDragEndIndex = useMemo(() => {
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
       onDragStartIndex={onDragStartIndex} onDragEndIndex={onDragEndIndex}
        onDragAbort={onDragAbort}
        >{children}</EntryListStateless>;
};
