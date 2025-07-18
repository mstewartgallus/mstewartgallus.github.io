"use client";

import type {
    ComponentType, FormEvent, MouseEvent,
    PointerEvent, ReactNode } from 'react';
import type { Id } from '@/types/ten';
import { createContext, useContext, useCallback, useId, useMemo, useState } from 'react';
import { Button } from "../button/Button";
import { useCursor, usePointerUp, usePointerLeave } from "../html/Html";

import listStyles from './EntryList.module.css';
import styles from './EntryItem.module.css';

export interface EntryItemProps {
    readonly id: Id;
    readonly value?: string;
    readonly disabled: boolean;
};


interface ItemContext {
    readonly disabled: boolean;
    readonly anyDragging: boolean;
    readonly dragging: boolean;
    readonly index: number;
}

interface ListContext {
    readonly dragIndex?: number;
    readonly onDragStartIndex?: (index: number) => void;
    readonly onDropIndex?: (index: number) => void;
    readonly onDragEnd?: () => void;

    readonly onArchiveIndex?: (index: number) => void;
};

const ItemContext = createContext<ItemContext>({
    disabled: true,
    dragging: false,
    anyDragging: false,
    index: 0
});
ItemContext.displayName = 'ItemContext';

const ListContext = createContext<ListContext>({
    dragIndex: 0
});
ListContext.displayName = 'ListContext';

interface ItemProviderProps {
    readonly children: ReactNode;
    readonly index: number;
    readonly disabled: boolean;
}

const ItemProvider = ({
    children, index, disabled
}: ItemProviderProps) => {
    const { dragIndex } = useContext(ListContext);
    const dragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;
    const memo = useMemo(() =>({
        disabled,
        anyDragging, dragging, index
    }), [ disabled, anyDragging, dragging, index ]);
    return <ItemContext.Provider value={memo}>{children}</ItemContext.Provider>;
};

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

interface ControlProps {
    readonly id: string;
    readonly onArchive?: () => void;
};

const ItemControls = ({
    id,
    onArchive,
}: ControlProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'archive':
            if (onArchive) {
                e.preventDefault();
                onArchive();
            }
            break;

        default:
            return;
        }
    }, [onArchive]);

    return <form id={id} onSubmit={onSubmit} action="#" className={styles.entryForm}>
        <Button disabled={!onArchive} value="archive">Archive</Button>
     </form>;
};

interface ItemProps {
    readonly children: ReactNode;
}
const useBind = (f: undefined | ((index: number) => void), index: number) =>
    useMemo(() => f ? (() => f(index)) : undefined, [f, index]);

export const EntryItem = ({ children }: ItemProps) => {
    // FIXME not sure a form is the right semantics here
    // FIXME rework grabber to integrated into the form system
    const formId = useId();

    const {
        anyDragging,
        dragging,
        index,
        disabled
    } = useContext(ItemContext);
    const {
        onDragStartIndex,
        onDragEnd,
        onDropIndex,
        onArchiveIndex
    } = useContext(ListContext);

    const onDragStart = useBind(onDragStartIndex, index);
    const onDrop = useBind(onDropIndex, index);
    const onArchive = useBind(onArchiveIndex, index);

    const otherDragging = anyDragging && !dragging;

    return <DropZone onDrop={otherDragging ? onDrop : undefined}>
        <div className={styles.entryItem}>
           <div className={styles.entryItemInner}>
           <Grabber dragging={dragging} onDragStart={onDragStart} onDragEnd={onDragEnd} />
            {children}
             </div>

        {
            !disabled &&
            <ItemControls
               id={formId}
               onArchive={(disabled || anyDragging) ? undefined : onArchive} />
        }
        </div>
      </DropZone>;
};

interface Entry {
    readonly id: Id;
    readonly value?: string;
}

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly Entry[];

    readonly onSwapIndices?: (dragIndex: number, dropIndex: number) => void;
    readonly onArchiveIndex?: (index: number) => void;
}

export const EntryList = ({
    children,
    fresh,
    onArchiveIndex, onSwapIndices
}: Props) => {
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
        onArchiveIndex
    }), [
        dragIndex,
        onDragStartIndex, onDragEnd,
        onDropIndex,
        onArchiveIndex
    ]);
    const Child = children;
    return <ul className={listStyles.entryList} role="list">
        <ListContext.Provider value={context}>
        {
            fresh.map(({ id, value }, index) =>
                <li key={id} role="listitem"
                    className={listStyles.entryItem}>
                    <ItemProvider disabled={!value} index={index}>
                        <Child value={value ?? undefined} id={id} disabled={dragIndex !== null} />
                    </ItemProvider>
                </li>)
        }
        </ListContext.Provider>
    </ul>;
};
