"use client";

import type {
    ComponentType, FormEvent, MouseEvent,
    PointerEvent, ReactNode } from 'react';
import type { Id } from '@/types/ten';
import { createContext, useId, useContext, useCallback, useMemo, useState } from 'react';
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
}

const ItemProvider = ({
    children, index
}: ItemProviderProps) => {
    const { dragIndex } = useContext(ListContext);
    const dragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;
    const memo = useMemo(() =>({
        anyDragging, dragging, index
    }), [ anyDragging, dragging, index ]);
    return <ItemContext.Provider value={memo}>{children}</ItemContext.Provider>;
};

interface GrabberProps {
    readonly dragging: boolean;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;
}

const Grabber = ({ dragging, onDragStart, onDragEnd }: GrabberProps) => {
    const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        if (e.button !== 0) {
            return;
        }
        e.preventDefault();
    }, []);

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
            <button className={styles.grabber}
               aria-expanded={dragging}
               onPointerDown={onPointerDown}
               onClick={onClick}
               tabIndex={-1}
               >
            <div className={styles.grabberIcon}>=</div>
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

    const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        if (e.button !== 0) {
            return;
        }
        e.preventDefault();
    }, []);

    if (!onDrop && isOver) {
        setOver(false);
        return;
    }

    return <div className={styles.dropWrapper}>
        <button className={styles.dropZone}
            onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}
            onPointerUp={onPointerUp}
            onClick={onClick}
            disabled={!onDrop ? true : undefined}
            data-over={isOver ? "true" : undefined}
            tabIndex={-1}
        />
        {children}
     </div>;

};

interface ControlProps {
    readonly id: string;
    readonly dragging: boolean;
    readonly anyDragging: boolean;

    readonly onDragStart?: () => void;
    readonly onDragEnd?: () => void;

    readonly onArchive?: () => void;
};

const ItemControls = ({
    id,

    dragging,
    onDragStart,
    onDragEnd,

    onArchive,
}: ControlProps) => {
    const disabled = !onDragStart;

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
        <Grabber
            dragging={dragging}
            onDragStart={onDragStart} onDragEnd={onDragEnd} />
        <Button disabled={disabled || !onArchive} value="archive">Archive</Button>
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
        index
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
             <ItemControls
               id={formId}
               anyDragging={anyDragging}
               dragging={dragging}

               onDragStart={dragging ? undefined : onDragStart}
               onDragEnd={dragging ? onDragEnd : undefined}
               onArchive={anyDragging ? undefined : onArchive}
           />
          {children}
        </div>
      </DropZone>;
};

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly { readonly id: Id, readonly value: string | null }[];

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
    return <ul className={listStyles.entryList}>
        <ListContext.Provider value={context}>
        {
            fresh.map(({ id, value }, index) =>
                <li key={id} className={listStyles.entryItem}>
                    <ItemProvider index={index}>
                    <Child value={value ?? undefined} id={id} disabled={dragIndex !== null}
                    />
                    </ItemProvider>
                </li>)
        }
        </ListContext.Provider>
    </ul>;
};
