import type { Id, Entry, Fresh } from "@/lib/features/ten/tenSlice";

import { FreshEdit } from "../fresh-edit/FreshEdit";

interface Props {
    item?: Fresh;
    selectionId?: Id;
    entryAtId: (id: Id) => Entry;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

export const FreshEditMaybe = ({
    item,
    selectionId,
    entryAtId,

    onChangeId,
    onSelectId, onDeselect
}: Props) => {
    if (!item) {
        return;
    }
    return <FreshEdit id={item.id} selectionId={selectionId} entryAtId={entryAtId}
        onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect} />;
};
