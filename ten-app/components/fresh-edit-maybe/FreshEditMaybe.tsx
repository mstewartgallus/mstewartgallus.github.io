import type { Id, Entry, Fresh } from "@/lib/features/ten/tenSlice";

import { CreateForm } from "../slot-controls/SlotControls";
import { FreshEdit } from "../fresh-edit/FreshEdit";

import styles from "./FreshEditMaybe.module.css";

interface Props {
    disabled: boolean;
    item?: Fresh;
    selectionId?: Id;
    entryAtId: (id: Id) => Entry;

    onChangeId?: (id: Id, value: string) => void;
    onSelectId: (id: Id) => void;
    onDeselect: () => void;

    onCreate?: () => void;
    onComplete?: () => void;
}

export const FreshEditMaybe = ({
    disabled,
    item,
    selectionId,
    entryAtId,

    onChangeId, onSelectId, onDeselect,

    onCreate, onComplete
}: Props) => {
    if (!item) {
        return <div className={styles.create}>
               <CreateForm disabled={disabled} onCreate={onCreate} />
               <>...</>
            </div>;
    }
    return <FreshEdit disabled={disabled} id={item.id} selectionId={selectionId} entryAtId={entryAtId}
        onChangeId={onChangeId} onSelectId={onSelectId} onDeselect={onDeselect}
        onComplete={onComplete}/>;
};
