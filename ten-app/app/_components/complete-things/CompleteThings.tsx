"use client";

import type { Id, Entry, Complete } from "@/lib/features/ten/tenSlice";

import {
    selectEntryAtId,
    selectComplete
} from "@/lib/features/ten/tenSlice";

import { useAppSelector } from "@/lib/hooks";
import { CompleteList } from '@/components/complete-list/CompleteList';
import { usePersistBootstrapped } from '../StoreProvider';

interface Props {
    entryAtId: (id: Id) => Entry;
    complete: readonly Complete[];
}

const TenImpl = ({ entryAtId, complete }: Props) => {
    return <section>
        <h1>Completed</h1>
        <CompleteList complete={complete} entryAtId={entryAtId} />
    </section>;
};

const err: (id: Id) => Entry = (id: Id) => {
    throw Error(`index ${id}`);
};

export const CompleteThings = () => {
    const bootstrapped = usePersistBootstrapped();

    const entryAtId = useAppSelector(selectEntryAtId);
    const completeArray = useAppSelector(selectComplete);

    return <TenImpl
        entryAtId={bootstrapped ? entryAtId : err}
        complete={bootstrapped ? completeArray : []}
        />;
};
