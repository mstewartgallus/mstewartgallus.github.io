import type { Id, EntryFresh } from "@/lib/features/ten/tenSlice";

import { FreshEdit } from "../fresh-edit/FreshEdit";

interface Props {
    item?: EntryFresh;

    selectionId?: Id;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;
}

export const FreshEditMaybe = ({
    item,
    selectionId,

    onChangeId,
    onSelectId, onDeselect
}: Props) => {
    if (!item) {
        return <>...</>;
    }
    return <FreshEdit {...item} selectionId={selectionId}
        onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect} />;
};
