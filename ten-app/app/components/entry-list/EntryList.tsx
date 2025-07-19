"use client";

import type {
    Key,
    ComponentType, MouseEvent,
    PointerEvent, ReactNode
} from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useCursor, usePointerUp, usePointerLeave } from "../html/Html";

import listStyles from './EntryList.module.css';
import styles from './EntryItem.module.css';

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

interface GrabberProps {
    readonly dragging: boolean;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
}

const Grabber = ({ dragging, onDragStart, onDragEnd }: GrabberProps) => {
    const onToggle = onDragStart || onDragEnd;
    const onClick = useMemo(() => {
        if (!onToggle) {
            return;
        }
        return (e: MouseEvent<HTMLButtonElement>) => {
            if (e.button !== 0) {
                return;
            }
            e.preventDefault();
            onToggle();
        };
    }, [onToggle]);

    const onPointerDown = useMemo(() => {
        if (!onDragStart) {
            return;
        }
        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            (e.target as Element).releasePointerCapture(e.pointerId);
            onDragStart()
        };
    }, [onDragStart]);

    const onPointerUp = useMemo(() => {
        if (!onDragEnd) {
            return;
        }
        return (e: PointerEvent) => {
            if (!e.isPrimary) {
                return;
            }
            onDragEnd();
        };
    }, [onDragEnd]);

    usePointerUp(onPointerUp);
    usePointerLeave(onDragEnd);
    useCursor(dragging ? 'grabbing' : undefined);

    return <div className={styles.grabberWrapper}>
           <button
                 className={styles.grabber}
                 aria-label="Reorder"
                 aria-expanded={dragging}
                 onPointerDown={onPointerDown}
                 onClick={onClick}
                 disabled={!onClick}
                 >
                <div className={styles.grabberIcon}>&</div>
            </button>
        </div>;
};

interface DropProps {
    readonly children: ReactNode;
    readonly onDrop?: () => void;
}

const DropZone = ({ children, onDrop }: DropProps) => {
    const [isOver, setOver] = useState<boolean>(false);

    const onPointerEnter = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            setOver(true);
        };
    }, [onDrop]);

    const onPointerLeave = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            setOver(false);
        };
    }, [onDrop]);

    const onPointerUp = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: PointerEvent<HTMLButtonElement>) => {
            if (!e.isPrimary) {
                return;
            }
            onDrop();
        };
    }, [onDrop]);

    const onClick = useMemo(() => {
        if (!onDrop) {
            return;
        }

        return (e: MouseEvent<HTMLButtonElement>) => {
            if (e.button !== 0) {
                return;
            }
            e.preventDefault();
            onDrop();
        };
    }, [onDrop]);

    if (!onDrop && isOver) {
        setOver(false);
        return;
    }

    return <div className={styles.dropWrapper}>
        <button className={styles.dropZone}
            onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}
            onPointerUp={onPointerUp}
            onClick={onClick}
            disabled={!onClick ? true : undefined}
            data-over={isOver ? true : undefined}
        />
        {children}
     </div>;

};

interface ItemProps {
    readonly children: ReactNode;
}
const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export const EntryItem = ({ children }: ItemProps) => {
    const index = useContext(ItemContext);
    const {
        dragIndex,
        onDragStartIndex,
        onDragEnd,
        onDropIndex
    } = useContext(ListContext);

    const dragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;

    const onDragStart = useBind(onDragStartIndex, index);
    const onDrop = useBind(onDropIndex, index);

    const otherDragging = anyDragging && !dragging;

    return <DropZone onDrop={otherDragging ? onDrop : undefined}>
        <div className={styles.entryItem}>
           <Grabber dragging={dragging} onDragStart={onDragStart} onDragEnd={onDragEnd} />
           {children}
        </div>
      </DropZone>;
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
    const [dragIndex, setDragIndex] = useState<number | null>(null);

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
    }, [dragIndex, anyDragging, onSwapIndices]);

    const context = useMemo(() => ({
        dragIndex: dragIndex ?? undefined,
        onDragStartIndex,
        onDragEnd,
        onDropIndex,
    }), [
        dragIndex,
        onDragStartIndex, onDragEnd,
        onDropIndex,
    ]);
    const Child = children;
    return <ul className={listStyles.entryList} role="list">
        <ListContext.Provider value={context}>
        {
            fresh.map((item, index) => {
                const key = keyOf(item, index)
                return <li key={key} role="listitem"
                    className={listStyles.entryItem}>
                    <ItemContext.Provider value={index}>
                        <Child item={item || undefined} disabled={dragIndex !== null} index={index} />
                    </ItemContext.Provider>
                    </li>;
            })
        }
        </ListContext.Provider>
    </ul>;
};
