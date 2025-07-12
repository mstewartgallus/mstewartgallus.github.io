import type { PayloadAction } from "@reduxjs/toolkit";
import type { Id } from "@/types/ten";
import { createSlice } from "@reduxjs/toolkit";

interface EditAction {
    readonly index: Id;
    readonly value: string;
}
interface ArchiveAction {
    readonly index: number;
}
interface UpAction {
    readonly index: number;
}
interface DownAction {
    readonly index: number;
}

export interface TenSliceState {
    entries: (string | null)[],
    freshId: Id[],
    archivedId: Id[]
};

const initialState: TenSliceState = (() => {
    const entries = Array(10).fill(null);
    const freshId = entries.map((v, ix) => ix);
    return {
        entries,
        freshId,
        archivedId: []
    };
})();

export const tenSlice = createSlice({
    name: "ten",

    initialState,

    reducers: create => ({
        edit: create.reducer((state, { payload: { index, value } }: PayloadAction<EditAction>) => {
            state.entries[state.freshId[index]] = value;
        }),

        archive: create.reducer((state, { payload: { index } }: PayloadAction<ArchiveAction>) => {
            const id = state.freshId[index];

            state.freshId[index] = state.entries.length;
            state.entries.push(null);

            state.archivedId = [id, ...state.archivedId];
        }),

        up: create.reducer((state, { payload: { index } }: PayloadAction<UpAction>) => {
            const nextIndex = (10 + index - 1) % 10;
            const value = state.freshId[index];
            state.freshId[index] = state.freshId[nextIndex];
            state.freshId[nextIndex] = value;
        }),

        down: create.reducer((state, { payload: { index } }: PayloadAction<DownAction>) => {
            const nextIndex = (index + 1) % 10;
            const value = state.freshId[index];
            state.freshId[index] = state.freshId[nextIndex];
            state.freshId[nextIndex] = value;
        })
    }),

    selectors: {
        selectFresh: ten =>
            ten.freshId.map(id => ({
                id,
                value: ten.entries[id]
            })),
        selectArchived: ten =>
            ten.archivedId.map(id => ({
                id,
                value: ten.entries[id]
            })),
    },
});

export const {
    edit,
    archive,
    up,
    down
} = tenSlice.actions;

export const {
    selectFresh, selectArchived
} = tenSlice.selectors;
