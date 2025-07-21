import type { Id, Entry, Complete } from "@/lib/features/ten/tenSlice";

import { useCallback } from 'react';
import { Complete as CompleteComponent } from '../complete/Complete';
import { List, Item, useItem } from '../list/List';

interface Props {
    complete: readonly Complete[];
    entryAtId: (id: Id) => Entry;
}

const CompleteItem = ({ complete, entryAtId }: Props) => {
    const index = useItem();
    const item = complete[index];
    const entry = entryAtId(item.id);
    return <CompleteComponent {...entry} completed={item.completed} />;
};

export const CompleteList = ({ complete, entryAtId }: Props) => {
    const keyOf = useCallback((index: number) => complete[index].id, [complete]);
    return <List length={complete.length} keyOf={keyOf}>
            <Item>
                <CompleteItem complete={complete} entryAtId={entryAtId} />
            </Item>
        </List>;
};
