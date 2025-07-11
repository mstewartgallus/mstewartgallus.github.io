import { createSlice } from "@reduxjs/toolkit";

export interface TenSliceState {
    entries: (string | null)[],
    fresh: number[]
    archived: number[]
};

const initialState: TenSliceState = (() => {
    const entries = Array(10).fill(null);
    const fresh = entries.map((v, ix) => ix);
    return {
        entries,
        fresh,
        archived: []
    };
})();

export const tenSlice = createSlice({
    name: "ten",

    initialState,

    reducers: (create) => ({
        edit: create.reducer((state, { payload: { index, value } }) => {
            state.entries[state.fresh[index]] = value;
        }),

        archive: create.reducer((state, { payload: { index }}) => {
            const id = state.fresh[index];

            state.fresh[index] = state.entries.length;
            state.entries.push(null);

            state.archived = [id, ...state.archived];
        }),

        up: create.reducer((state, { payload: { index }}) => {
            const nextIndex = (10 + index - 1) % 10;
            const value = state.fresh[index];
            state.fresh[index] = state.fresh[nextIndex];
            state.fresh[nextIndex] = value;
        }),

        down: create.reducer((state, {payload: { index }}) => {
            const nextIndex = (index + 1) % 10;
            const value = state.fresh[index];
            state.fresh[index] = state.fresh[nextIndex];
            state.fresh[nextIndex] = value;
        })
    }),

    selectors: {
        selectEntries: (ten) => ten.entries,
        selectFresh: (ten) => ten.fresh,
        selectArchived: (ten) => ten.archived
    },
});

export const {
    edit,
    archive,
    up,
    down
} = tenSlice.actions;

export const {
    selectEntries, selectFresh, selectArchived
} = tenSlice.selectors;
