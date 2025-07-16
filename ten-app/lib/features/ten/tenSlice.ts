import type { PayloadAction, Selector } from "@reduxjs/toolkit";
import type { Id } from "@/types/ten";
import { createSelector, createSlice } from "@reduxjs/toolkit";

interface EditAction {
    readonly id: Id;
    readonly value: string;
}
interface ArchiveAction {
    readonly index: number;
}
interface SwapAction {
    readonly leftIndex: number;
    readonly rightIndex: number;
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

type TenSelector<T> = Selector<TenSliceState, T>;

const selectEntries: TenSelector<readonly (string | null)[]> = (ten: TenSliceState) => ten.entries;
const selectFreshId: TenSelector<readonly Id[]> = (ten: TenSliceState) => ten.freshId;
const selectArchiveId: TenSelector<readonly Id[]> = (ten: TenSliceState) => ten.archivedId;

export const tenSlice = createSlice({
    name: "ten",

    initialState,

    reducers: create => ({
        edit: create.reducer((state, { payload: { id, value } }: PayloadAction<EditAction>) => {
            state.entries[id] = value;
        }),

        archive: create.reducer((state, { payload: { index } }: PayloadAction<ArchiveAction>) => {
            const id = state.freshId[index];

            state.freshId[index] = state.entries.length;
            state.entries.push(null);

            state.archivedId = [id, ...state.archivedId];
        }),

        swap: create.reducer((state, { payload: { leftIndex, rightIndex } }: PayloadAction<SwapAction>) => {
            const id = state.freshId[leftIndex];
            state.freshId[leftIndex] = state.freshId[rightIndex];
            state.freshId[rightIndex] = id;
        }),
    }),

    selectors: {
        selectFresh: createSelector(
            [selectEntries, selectFreshId],
            (entries, freshId) =>
                freshId.map(id => ({
                    id,
                    value: entries[id]
                }))),
        selectArchived: createSelector(
            [selectEntries, selectArchiveId],
            (entries, archivedId) =>
                archivedId.map(id => ({
                    id,
                    value: entries[id]
                })))
    },
});

export const {
    edit,
    archive,
    swap,
} = tenSlice.actions;

export const {
    selectFresh, selectArchived
} = tenSlice.selectors;
