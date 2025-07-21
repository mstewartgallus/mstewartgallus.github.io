"use client";

import type { Id, Entry, Fresh } from "@/lib/features/ten/tenSlice";

import {
    edit,
    create,
    complete,
    swap,

    selectNewEntryId,
    selectEntryAtId,
    selectFresh,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo } from 'react';
import { FreshList } from '@/components/fresh-list/FreshList';
import { usePersistBootstrapped } from '../StoreProvider';

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
        <h1>{count} / 10 Things</h1>
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

interface Props {
    newEntryId: Id;
    entryAtId: (id: Id) => Entry;

    readonly fresh: readonly (Fresh | null)[];

    onChangeId?: (id: Id, value: string) => void;

    onCreateIndex?: (index: number) => void;
    onCompleteIndex?: (index: number) => void;
    onSwapIndices?: (indexLeft: number, indexRight: number) => void;
}

const TenImpl = ({
    entryAtId, newEntryId, fresh,
    onChangeId,
    onCreateIndex,
    onCompleteIndex,
    onSwapIndices
}: Props) => {
    return <FreshSection fresh={fresh}
                     entryAtId={entryAtId}
                     newEntryId={newEntryId}
                     onCreateIndex={onCreateIndex}
                     onChangeId={onChangeId}
                     onCompleteIndex={onCompleteIndex} onSwapIndices={onSwapIndices}
        />;
};

const mock = Array(10).fill(null);
const err: (id: Id) => Entry = (id: Id) => {
    throw Error(`index ${id}`);
};

export const TenThings = () => {
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

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        entryAtId={bootstrapped ? entryAtId : err}
        fresh={bootstrapped ? fresh : mock}
        newEntryId={newEntryId}

        onChangeId={bootstrapped ? onChangeId : undefined}
        onCreateIndex={bootstrapped ? onCreateIndex : undefined}
        onCompleteIndex={bootstrapped ? onCompleteIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
