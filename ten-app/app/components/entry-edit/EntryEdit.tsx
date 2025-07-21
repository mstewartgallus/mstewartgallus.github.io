"use client";

import type { Entry } from "@/lib/features/ten/tenSlice";

import { EditFormMaybe } from "../edit-form-maybe/EditFormMaybe";
import { Time } from "../time/Time";

type Props = Entry & {
    onChange?: (value: string) => void;
    onSelect?: () => void;
    onDeselect?: () => void;
}

export const EntryEdit = ({
    value, created,
    onChange, onSelect, onDeselect
}: Props) =>
    <div>
        <EditFormMaybe value={value}
            onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} />
        <div>Created: <Time>{created}</Time></div>
    </div>;
