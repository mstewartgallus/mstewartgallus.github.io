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
import { FreshList } from '../fresh-list/FreshList';
import { CompleteList } from '../complete-list/CompleteList';
import { Button } from '../button/Button';
import { usePersistBootstrapped } from '../../StoreProvider';

import styles from "./Ten.module.css";

interface FreshProps {
    readonly fresh: readonly (EntryFresh | null)[];

    readonly onChangeId?: (id: Id, value: string) => void;
    readonly createIndex?: (index: number) => Id;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

const Fresh = ({
    fresh, onChangeId,
    createIndex, onCompleteIndex, onSwapIndices
}: FreshProps) => {
    const count = useMemo(() => fresh.reduce((x, y) => (y != null ? 1 : 0) + x, 0),
                          [fresh]);

    return <section>
        <h1>{count} / 10</h1>
        <FreshList
              fresh={fresh}

              onChangeId={onChangeId}

              createIndex={createIndex}
              onCompleteIndex={onCompleteIndex}
              onSwapIndices={onSwapIndices}

                    />
        </section>;
}

interface CompletedProps {
    completed: readonly EntryComplete[];
}

const Completed = ({ completed }: CompletedProps) => {
    return <section>
        <h2>Completed</h2>
        <CompleteList completed={completed} />
    </section>;
};


interface Props {
    readonly fresh: readonly (EntryFresh | null)[];
    readonly completed: readonly EntryComplete[];

    readonly onEditId?: (id: Id, value: string) => void;

    readonly createIndex?: (index: number) => Id;
    readonly onCompleteIndex?: (index: number) => void;
    readonly onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

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
                      onChangeId={onEditId}
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
