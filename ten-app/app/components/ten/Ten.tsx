"use client";

import type { Id } from "@/types/ten";
import type { MouseEvent } from "react";

import {
    edit,
    archive,
    swap,
    selectFresh,
    selectArchived,
} from "@/lib/features/ten/tenSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useMemo, useState } from 'react';
import { EntryList, EntryItem } from '../entry-list/EntryList';
import { EntryForm } from '../entry-form/EntryForm';
import { Button } from '../button/Button';
import { usePersistBootstrapped } from '../../StoreProvider';

import styles from "./Ten.module.css";

interface AdaptorProps {
    readonly id: Id;
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
    const selected = selectionId === id;

    const onSelect = useCallback(() => onSelectId(id), [id, onSelectId]);

    const onEdit = useMemo(() => {
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
    readonly value?: string;
}

interface Props {
    readonly fresh: readonly Entry[];
    readonly archived: readonly Entry[];

    readonly onEditId?: (id: Id, value: string) => void;

    readonly onArchiveIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

interface Item {
    readonly id: Id;
    readonly value?: string;
    readonly disabled: boolean;
}

interface FreshProps {
    readonly fresh: readonly Entry[];

    readonly onEditId?: (id: Id, value: string) => void;
    readonly onArchiveIndex?: (index: number) => void;
    readonly onSwapIndices?: (leftIndex: number, rightIndex: number) => void;
}

const Fresh = ({ fresh, onEditId, onArchiveIndex, onSwapIndices }: FreshProps) => {
    const [selectionId, setSelectionId] = useState<Id | null>(null);

    const onSelectId = useCallback((id: Id) => setSelectionId(id), []);
    const onDeselect = useCallback(() => setSelectionId(null), []);

    const count = useMemo(() => fresh.reduce((x, y) => (y.value != null ? 1 : 0) + x, 0),
                          [fresh]);

    return <section>
                   <h1>{count} / 10</h1>
                   <EntryList
                       fresh={fresh}
                       onArchiveIndex={onArchiveIndex}
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

interface ArchivedProps {
    readonly archived: readonly Entry[];
}

const Archived = ({ archived }: ArchivedProps) =>
    <section>
    <h2>Archived</h2>
    <ul>
    {
        archived.map(({ id, value }) =>
            <li key={id}>{value}</li>)
    }
    </ul>
    </section>;

const TenImpl = ({
    fresh, archived,
    onEditId, onArchiveIndex, onSwapIndices
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
                <div>{tab ? 'Archived' : 'Fresh'}</div>
                <Button aria-expanded={tab} onClick={onClick}>{tab ? 'Fresh' : 'Archived'}</Button>
            </div>
        </nav>
        {
            tab ?
                <Fresh fresh={fresh}
            onEditId={onEditId} onArchiveIndex={onArchiveIndex} onSwapIndices={onSwapIndices} /> :
                <Archived archived={archived} />
        }
    </>;
};

const mock = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
];

export const Ten = () => {
    const dispatch = useAppDispatch();

    const onEditId = useCallback((id: Id, value: string) =>
        dispatch(edit({ id, value })),
        [dispatch]);
    const onArchiveIndex = useCallback((index: number) =>
        dispatch(archive({ index })),
        [dispatch]);
    const onSwapIndices = useCallback((leftIndex: number, rightIndex: number) =>
        dispatch(swap({ leftIndex, rightIndex })),
        [dispatch]);

    const fresh = useAppSelector(selectFresh);
    const archived = useAppSelector(selectArchived);

    const bootstrapped = usePersistBootstrapped();

    return <TenImpl
        fresh={bootstrapped ? fresh : mock}
        archived={bootstrapped ? archived : []}
        onEditId={bootstrapped ? onEditId : undefined}
        onArchiveIndex={bootstrapped ? onArchiveIndex : undefined}
        onSwapIndices={bootstrapped ? onSwapIndices : undefined}
        />;
};
