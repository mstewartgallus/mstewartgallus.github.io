"use client";

import type { EntryComplete } from "@/lib/features/ten/tenSlice";

import { useCallback } from 'react';
import { Complete } from '../complete/Complete';
import { List, Item, useItem } from '../list/List';

interface Props {
    completed: readonly EntryComplete[];
}

const CompleteItem = ({ completed }: Props) => {
    const index = useItem();
    const item = completed[index];
    return <Complete {...item} />;
};

export const CompleteList = ({ completed }: Props) => {
    const keyOf = useCallback((index: number) => completed[index].id, [completed]);
    return <List length={completed.length} keyOf={keyOf}>
            <Item>
                <CompleteItem completed={completed} />
            </Item>
        </List>;
};
