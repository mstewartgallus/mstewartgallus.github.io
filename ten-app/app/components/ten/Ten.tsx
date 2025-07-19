"use client";

import type { Id, EntryComplete, EntryFresh } from "@/lib/features/ten/tenSlice";
import type { MouseEvent } from "react";

import {
    edit,
    create,
    complete,
    swap,
    selectNewEntryId,
    selectEntryFresh,
    selectEntryComplete,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo, useState } from 'react';
import { EntryList, EntryItem } from '../entry-list/EntryList';
import { EntryForm } from '../entry-form/EntryForm';
import { Button } from '../button/Button';
import { usePersistBootstrapped } from '../../StoreProvider';

import styles from "./Ten.module.css";

interface AdaptorProps {
    item?: EntryFresh;
    disabled: boolean;

    selectionId?: Id;

    onEditId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

const EntryFormAdaptor = ({
   item, disabled, selectionId,

    onEditId,
    onSelectId, onDeselect
}: AdaptorProps) => {
    const id = item && item.id;
    const selected = id !== null && selectionId === id;

    const onSelect = useMemo(() => {
        if (id === undefined) {
            return;
        }
        if (selected) {
            return;
        }
        return () => onSelectId(id);
    }, [id, selected, onSelectId]);

    const onEdit = useMemo(() => {
        if (id === undefined) {
            return;
        }
        if (!onEditId) {
            return;
        }
        return (value: string) => onEditId(id, value);
    }, [id, onEditId]);

    return <EntryForm disabled={disabled} item={item} selected={selected}
        onSelect={onSelect} onDeselect={onDeselect} onEdit={onEdit}
        />;
};

interface Props {
    readonly fresh: readonly (EntryFresh | null)[];
    readonly completed: readonly EntryComplete[];

    readonly onEditId?: (id: Id, value: string) => void;

    readonly createIndex?: (index: number) => Id;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

interface FreshProps {
    readonly fresh: readonly (EntryFresh | null)[];

    readonly onEditId?: (id: Id, value: string) => void;
    readonly createIndex?: (index: number) => Id;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

const Fresh = ({
    fresh, onEditId,
    createIndex, onCompleteIndex, onSwapIndices
}: FreshProps) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const count = useMemo(() => fresh.reduce((x, y) => (y != null ? 1 : 0) + x, 0),
                          [fresh]);

    const onCreateIndex = useMemo(() => {
        if (!createIndex) {
            return;
        }
        return (index: number) => setSelectionId(createIndex(index));
    }, [createIndex]);

    return <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       fresh={fresh}
                       onCreateIndex={onCreateIndex}
                       onCompleteIndex={onCompleteIndex}
                       onSwapIndices={onSwapIndices}
        >{
            ({item, disabled}) =>
                <EntryItem>
                   <EntryFormAdaptor
                       item={item}
                       disabled={disabled}
                       selectionId={selectionId ?? undefined}
                       onEditId={onEditId}
                       onSelectId={onSelectId}
                       onDeselect={onDeselect}
                    />
                </EntryItem>
        }</EntryList>
        </section>;
}

interface ItemCompleteProps {
    value: string;
    created: number;
    completed: number;
}

const ItemComplete = ({ value, created, completed }: ItemCompleteProps) => {
    const format = useMemo(() => new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    }), []);

    const createdDate = format.format(new Date(created));
    const completedDate = format.format(new Date(completed));
    return <div>{value} {createdDate} {completedDate}</div>;
};

interface CompletedProps {
    completed: readonly EntryComplete[];
}

const Completed = ({ completed }: CompletedProps) =>
    <section>
    <h2>Completed</h2>
    <ul>
    {
        completed.map(item =>
            <li key={item.id}><ItemComplete {...item} /></li>)
    }
    </ul>
    </section>;

const TenImpl = ({
    fresh, completed,
    onEditId,
    createIndex,
    onCompleteIndex,
    onSwapIndices
}: Props) => {
    const [tab, setTab] = useState(false);

    const onClick = useCallback((e: MouseEvent<HTMLElement>) => {
        if (e.button !== 0) {
            return;
        }
        e.preventDefault();

        setTab(o => !o);
    }, []);

    return <>
        <nav className={styles.tabWrapper}>
            <div className={styles.tab}>
                <div>{tab ? 'Completed' : 'Fresh'}</div>
                <Button aria-expanded={tab} onClick={onClick}>{tab ? 'Fresh' : 'Completed'}</Button>
            </div>
        </nav>
        {
            tab ?
                <Completed completed={completed} /> :
                <Fresh fresh={fresh}
            onEditId={onEditId}
            createIndex={createIndex} onCompleteIndex={onCompleteIndex} onSwapIndices={onSwapIndices}
                />
        }
    </>;
};

const mock = Array(10).fill(null);

export const Ten = () => {
    const dispatch = useAppDispatch();

    const newEntryId = useAppSelector(selectNewEntryId);
    const entryFresh = useAppSelector(selectEntryFresh);
    const entryComplete = useAppSelector(selectEntryComplete);

    const onEditId = useCallback((id: Id, value: string) =>
        dispatch(edit(id, value)),
        [dispatch]);
    const onCompleteIndex = useCallback((index: number) =>
        dispatch(complete(index)),
        [dispatch]);
    const createIndex = useCallback((index: number) => {
        dispatch(create(index, newEntryId));
        return newEntryId;
    }, [newEntryId, dispatch]);
    const onSwapIndices = useCallback((indexLeft: number, indexRight: number) =>
        dispatch(swap(indexLeft, indexRight)),
        [dispatch]);

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        fresh={bootstrapped ? entryFresh : mock}
        completed={bootstrapped ? entryComplete : []}
        onEditId={bootstrapped ? onEditId : undefined}
        createIndex={bootstrapped ? createIndex : undefined}
        onCompleteIndex={bootstrapped ? onCompleteIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
