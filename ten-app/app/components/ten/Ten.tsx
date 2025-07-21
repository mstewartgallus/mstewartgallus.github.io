"use client";

import type { Id, Entry, Fresh, Complete } from "@/lib/features/ten/tenSlice";
import type { MouseEvent } from "react";

import {
    edit,
    create,
    complete,
    swap,

    selectNewEntryId,

    selectEntryAtId,

    selectFresh,
    selectComplete,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo, useState } from 'react';
import { FreshList } from '../fresh-list/FreshList';
import { CompleteList } from '../complete-list/CompleteList';
import { Button } from '../button/Button';
import { usePersistBootstrapped } from '../../StoreProvider';

import styles from "./Ten.module.css";

interface FreshSectionProps {
    fresh: readonly (Fresh | null)[];
    entryAtId: (id: Id) => Entry;
    newEntryId: Id;

    onChangeId?: (id: Id, value: string) => void;
    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
    onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

const FreshSection = ({
    entryAtId, newEntryId, fresh, onChangeId,
    onCreateIndex, onCompleteIndex, onSwapIndices
}: FreshSectionProps) => {
    const count = useMemo(() => fresh.reduce((x, y) => (y != null ? 1 : 0) + x, 0),
                          [fresh]);

    return <section>
        <h1>{count} / 10</h1>
        <FreshList
              entryAtId={entryAtId}
              fresh={fresh}
              newEntryId={newEntryId}

              onChangeId={onChangeId}

              onCreateIndex={onCreateIndex}
              onCompleteIndex={onCompleteIndex}
              onSwapIndices={onSwapIndices}

                    />
        </section>;
}

interface CompletedProps {
    complete: readonly Complete[];
    entryAtId: (id: Id) => Entry;
}

const Completed = ({ complete, entryAtId }: CompletedProps) => {
    return <section>
        <h2>Completed</h2>
        <CompleteList complete={complete} entryAtId={entryAtId} />
    </section>;
};


interface Props {
    newEntryId: Id;
    entryAtId: (id: Id) => Entry;

    readonly fresh: readonly (Fresh | null)[];
    readonly complete: readonly Complete[];

    onChangeId?: (id: Id, value: string) => void;

    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
    onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

const TenImpl = ({
    entryAtId, newEntryId, fresh, complete,
    onChangeId,
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
                <Completed complete={complete} entryAtId={entryAtId} /> :
                <FreshSection fresh={fresh}
                     entryAtId={entryAtId}
                     newEntryId={newEntryId}
                     onCreateIndex={onCreateIndex}
                     onChangeId={onChangeId}
                     onCompleteIndex={onCompleteIndex} onSwapIndices={onSwapIndices}
                />
        }
    </>;
};

const mock = Array(10).fill(null);
const err: (id: Id) => Entry = (id: Id) => {
    throw Error(`index ${id}`);
};

export const Ten = () => {
    const dispatch = useAppDispatch();

    const onChangeId = useCallback((id: Id, value: string) =>
        dispatch(edit(id, value)),
        [dispatch]);
    const onCreateIndex = useCallback((index: number) =>
        dispatch(create(index)), [dispatch]);
    const onCompleteIndex = useCallback((index: number) =>
        dispatch(complete(index)),
        [dispatch]);
    const onSwapIndices = useCallback((indexLeft: number, indexRight: number) =>
        dispatch(swap(indexLeft, indexRight)),
        [dispatch]);

    const newEntryId = useAppSelector(selectNewEntryId);
    const entryAtId = useAppSelector(selectEntryAtId);
    const fresh = useAppSelector(selectFresh);
    const completeArray = useAppSelector(selectComplete);

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        entryAtId={bootstrapped ? entryAtId : err}
        fresh={bootstrapped ? fresh : mock}
        complete={bootstrapped ? completeArray : []}
        newEntryId={newEntryId}

        onChangeId={bootstrapped ? onChangeId : undefined}
        onCreateIndex={bootstrapped ? onCreateIndex : undefined}
        onCompleteIndex={bootstrapped ? onCompleteIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
