"use client";

import type { Id } from "@/types/ten";
import type { MouseEvent } from "react";

import {
    edit,
    create,
    complete,
    swap,
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
    readonly id?: Id;
    readonly value?: string;
    readonly disabled: boolean;

    readonly selectionId?: Id;

    readonly onEditId?: (id: Id, value: string) => void;
    readonly onSelectId: (id: Id) => void;
    readonly onDeselect: () => void;
}

const EntryFormAdaptor = ({
   id, value, disabled, selectionId,

    onEditId,
    onSelectId, onDeselect
}: AdaptorProps) => {
    const selected = id !== null && selectionId === id;

    const onSelect = useMemo(() => {
        if (id === undefined) {
            return;
        }
        return () => onSelectId(id);
    }, [id, onSelectId]);

    const onEdit = useMemo(() => {
        if (id === undefined) {
            return;
        }
        if (!onEditId) {
            return;
        }
        return (value: string) => onEditId(id, value);
    }, [id, onEditId]);

    return <EntryForm disabled={disabled} value={value} selected={selected}
        onSelect={onSelect} onDeselect={onDeselect} onEdit={onEdit}
        />;
};

interface Entry {
    readonly id: Id;
    readonly value: string;
}

interface Props {
    readonly fresh: readonly (Entry | null)[];
    readonly completed: readonly Entry[];

    readonly onEditId?: (id: Id, value: string) => void;

    readonly onCreateIndex?: (index: number) => void;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

interface Item {
    readonly id?: Id;
    readonly value?: string;
    readonly disabled: boolean;
}

interface FreshProps {
    readonly fresh: readonly (Entry | null)[];

    readonly onEditId?: (id: Id, value: string) => void;
    readonly onCreateIndex?: (index: number) => void;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

const Fresh = ({
    fresh, onEditId,
    onCreateIndex,onCompleteIndex, onSwapIndices
}: FreshProps) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const count = useMemo(() => fresh.reduce((x, y) => (y != null ? 1 : 0) + x, 0),
                          [fresh]);

    return <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       fresh={fresh}
                       onCreateIndex={onCreateIndex}
                       onCompleteIndex={onCompleteIndex}
                       onSwapIndices={onSwapIndices}
        >{
            ({id, value, disabled}: Item) =>
                <EntryItem>
                   <EntryFormAdaptor
                       id={id}
                       value={value}
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

interface CompletedProps {
    readonly completed: readonly Entry[];
}

const Completed = ({ completed }: CompletedProps) =>
    <section>
    <h2>Completed</h2>
    <ul>
    {
        completed.map(({ id, value }) =>
            <li key={id}>{value}</li>)
    }
    </ul>
    </section>;

const TenImpl = ({
    fresh, completed,
    onEditId,
    onCreateIndex,
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
            onCreateIndex={onCreateIndex} onCompleteIndex={onCompleteIndex} onSwapIndices={onSwapIndices}
                />
        }
    </>;
};

const mock = Array(10).fill(null);

export const Ten = () => {
    const dispatch = useAppDispatch();

    const onEditId = useCallback((id: Id, value: string) =>
        dispatch(edit({ id, value })),
        [dispatch]);
    const onCompleteIndex = useCallback((index: number) =>
        dispatch(complete({ index })),
        [dispatch]);
    const onCreateIndex = useCallback((index: number) =>
        dispatch(create({ index })),
        [dispatch]);
    const onSwapIndices = useCallback((leftIndex: number, rightIndex: number) =>
        dispatch(swap({ leftIndex, rightIndex })),
        [dispatch]);

    const entryFresh = useAppSelector(selectEntryFresh);
    const entryComplete = useAppSelector(selectEntryComplete);

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        fresh={bootstrapped ? entryFresh : mock}
        completed={bootstrapped ? entryComplete : []}
        onEditId={bootstrapped ? onEditId : undefined}
        onCreateIndex={bootstrapped ? onCreateIndex : undefined}
        onCompleteIndex={bootstrapped ? onCompleteIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
