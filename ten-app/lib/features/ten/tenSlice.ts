import type { PayloadAction, Selector } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";

export type Id = number;

export interface Entry {
    value: string;
    created: number;
}

interface Fresh {
    id: Id;
}

interface Complete {
    id: Id;
    completed: number;
}

export type EntryFresh = Entry & Fresh;
export type EntryComplete = Entry & Complete;

interface CreateAction {
    id: Id;
    index: number;
    created: number;
}
interface EditAction {
    id: Id;
    value: string;
}

interface CompleteAction {
    index: number;
    completed: number;
}

interface SwapAction {
    indexLeft: number;
    indexRight: number;
}

export interface TenSliceState {
    entry: Entry[],
    fresh: (Fresh | null)[],
    complete: Complete[]
};

const initialState: TenSliceState = (() => {
    const fresh = Array(10).fill(null);
    return {
        entry: [],
        fresh,
        complete: []
    };
})();

type TenSelector<T> = Selector<TenSliceState, T>;

const selectEntry: TenSelector<readonly Entry[]> = ten => ten.entry;
const selectFresh: TenSelector<readonly (Fresh | null)[]> = ten => ten.fresh;
const selectComplete: TenSelector<readonly Complete[]> = ten => ten.complete;

const entryFresh: (
    entry: readonly Entry[],
    fresh: readonly (Fresh | null)[]
) => readonly (EntryFresh | null)[] = (entry, fresh) =>
    fresh.map(x => {
        if (!x) {
            return null;
        }
        return ({ ...x, ...entry[x.id] });
    });

const entryComplete: (
    entry: readonly Entry[],
    complete: readonly Complete[]
) => readonly EntryComplete[] = (entry, complete) =>
    complete.map(x => {
        const theEntry = entry[x.id];
        return ({ ...x, ...theEntry });
    });

const checkIndex = <T>(array: readonly T[], index: number) => {
    const { length } = array;
    if (index < 0 || index >= length) {
        throw Error(`${index} out of bounds of array of length ${length}`);
    }
};

export const tenSlice = createSlice({
    name: "ten",

    initialState,

    reducers: create => ({
        edit: create.preparedReducer(
            (id: Id, value: string) => ({ payload: {id, value } })
            ,
            ({ entry }, { payload: { id, value } }: PayloadAction<EditAction>) => {
            checkIndex(entry, id);

            entry[id].value = value;
        }),

        create: create.preparedReducer(
            (index: number, id: Id) => {
                const created = Date.now();
                return { payload: { index, id, created } };
            }, ({ fresh, entry }, { payload: { id, index, created } }: PayloadAction<CreateAction>) => {
            checkIndex(fresh, index);
            if (fresh[index]) {
                throw Error(`fresh ${index} is non-empty`);
            }

            const { length } = entry;
            if (id !== length) {
                throw Error(`create id ${id} is not new id ${length}`);
            }

            entry.push({ created, value: '' });
            fresh[index] = { id };
        }),

        complete: create.preparedReducer(
            index => {
                const completed = Date.now();
                return { payload: { index, completed } };
            }, ({ fresh, complete }, { payload: { index, completed } }: PayloadAction<CompleteAction>) => {
                checkIndex(fresh, index);

                const oldFresh = fresh[index];
                if (!oldFresh) {
                    throw Error(`fresh ${index} is empty`);
                }
                fresh[index] = null;
                complete.unshift({ ...oldFresh, completed });
            }),

        swap: create.preparedReducer(
            (indexLeft: number, indexRight: number) => ({ payload: { indexLeft, indexRight }}),
            ({ fresh }, { payload: { indexLeft, indexRight } }: PayloadAction<SwapAction>) => {
                checkIndex(fresh, indexLeft);
                checkIndex(fresh, indexRight);

                const leftFresh = fresh[indexLeft];
                fresh[indexLeft] = fresh[indexRight];
                fresh[indexRight] = leftFresh;
            })
    }),

    selectors: {
        selectNewEntryId: ten => ten.entry.length,
        selectEntryFresh: createSelector([selectEntry, selectFresh], entryFresh),
        selectEntryComplete: createSelector([selectEntry, selectComplete], entryComplete)
    },
});

export const {
    create,
    edit,
    complete,
    swap,
} = tenSlice.actions;

export const {
    selectNewEntryId,
    selectEntryFresh,
    selectEntryComplete
} = tenSlice.selectors;
