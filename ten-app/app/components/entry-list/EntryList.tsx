"use client";

import type {
    ComponentType, FormEvent, MouseEvent,
    PointerEvent, ReactNode } from 'react';
import type { Id } from '@/types/ten';
import { createContext, useContext, useCallback, useId, useMemo, useState } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { useCursor, usePointerUp, usePointerLeave } from "../html/Html";

import listStyles from './EntryList.module.css';
import styles from './EntryItem.module.css';

export interface EntryItemProps {
    readonly id?: Id;
    readonly value?: string;
    readonly disabled: boolean;
};


interface ItemContext {
    readonly hasItem: boolean;
    readonly index: number;
}

interface ListContext {
    readonly dragIndex?: number;
    readonly onDragStartIndex?: (index: number) => void;
    readonly onDropIndex?: (index: number) => void;
    readonly onDragEnd?: () => void;

    readonly onCreateIndex?: (index: number) => void;
    readonly onCompleteIndex?: (index: number) => void;
};

const ItemContext = createContext<ItemContext>({
    index: 0,
    hasItem: false
});
ItemContext.displayName = 'ItemContext';

const ListContext = createContext<ListContext>({
});
ListContext.displayName = 'ListContext';

interface ItemProviderProps {
    readonly children: ReactNode;
    readonly index: number;
    readonly hasItem: boolean;
}

const ItemProvider = ({
    children, index, hasItem
}: ItemProviderProps) => {
    const memo = useMemo(() =>({
        index,
        hasItem
    }), [ index, hasItem ]);
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
    id: string;
    disabled: boolean;
    onCreate?: () => void;
    onComplete?: () => void;
};

const ItemControls = ({
    id,
    disabled,
    onCreate,
    onComplete,
}: ControlProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'complete':
            if (onComplete) {
                e.preventDefault();
                onComplete();
            }
            break;

            case 'create':
                if (onCreate) {
                    e.preventDefault();
                    onCreate();
                }
                break;

        default:
            return;
        }
    }, [onComplete, onCreate]);

    return <form id={id} onSubmit={onSubmit} action="#" className={styles.entryForm}>
        {
            onCreate &&
                <Button disabled={disabled} aria-label="Create Task" value="create"><Icon>+</Icon></Button>
        }
        {
            onComplete &&
                <Button disabled={disabled} aria-label="Complete Task" value="complete"><Icon>✔</Icon></Button>
        }
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

    const { index, hasItem } = useContext(ItemContext);
    const {
        dragIndex,
        onDragStartIndex,
        onDragEnd,
        onDropIndex,
        onCreateIndex,
        onCompleteIndex
    } = useContext(ListContext);

    const dragging = dragIndex == index;
    const anyDragging = dragIndex !== undefined;

    const onDragStart = useBind(onDragStartIndex, index);
    const onDrop = useBind(onDropIndex, index);

    let onCreate = useBind(onCreateIndex, index);
    let onComplete = useBind(onCompleteIndex, index);

    onCreate = hasItem ? undefined : onCreate;
    onComplete = hasItem ? onComplete : undefined;

    const otherDragging = anyDragging && !dragging;

    return <DropZone onDrop={otherDragging ? onDrop : undefined}>
        <div className={styles.entryItem}>
           <div className={styles.entryItemInner}>
           <Grabber dragging={dragging} onDragStart={onDragStart} onDragEnd={onDragEnd} />
            {children}
             </div>
            <ItemControls
               id={formId}
               disabled={anyDragging}
               onCreate={onCreate}
               onComplete={onComplete} />
        </div>
      </DropZone>;
};

interface Entry {
    readonly id: Id;
    readonly value: string;
}

interface Props {
    readonly children: ComponentType<EntryItemProps>;
    readonly fresh: readonly (Entry | null)[];

    readonly onSwapIndices?: (dragIndex: number, dropIndex: number) => void;
    readonly onCreateIndex?: (index: number) => void;
    readonly onCompleteIndex?: (index: number) => void;
}

export const EntryList = ({
    children,
    fresh,
    onCreateIndex,
    onCompleteIndex, onSwapIndices
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
        onCreateIndex,
        onCompleteIndex
    }), [
        dragIndex,
        onDragStartIndex, onDragEnd,
        onDropIndex,
        onCreateIndex,
        onCompleteIndex
    ]);
    const Child = children;
    return <ul className={listStyles.entryList} role="list">
        <ListContext.Provider value={context}>
        {
            fresh.map((item, index) => {
                const id = item ? item.id : undefined;
                const value = item ? item.value : undefined;
                const key = id ? `id-${id}` : `index-${index}`;
                return <li key={key} role="listitem"
                    className={listStyles.entryItem}>
                    <ItemProvider hasItem={!!item} index={index}>
                        <Child value={value} id={id} disabled={dragIndex !== null} />
                    </ItemProvider>
                    </li>;
            })
        }
        </ListContext.Provider>
    </ul>;
};
