import type { PayloadAction, Selector } from "@reduxjs/toolkit";
import type { Id } from "@/types/ten";
import { createSelector, createSlice } from "@reduxjs/toolkit";

interface CreateAction {
    readonly index: number;
}
interface EditAction {
    readonly id: Id;
    readonly value: string;
}
interface CompleteAction {
    readonly index: number;
}
interface SwapAction {
    readonly leftIndex: number;
    readonly rightIndex: number;
}


interface Entry {
    value: string;
}

interface Fresh {
    id: Id;
}

interface Complete {
    id: Id;
}

export type EntryFresh = Entry & Fresh;
export type EntryComplete = Entry & Complete;


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

const selectEntry: TenSelector<readonly Entry[]> = (ten: TenSliceState) => ten.entry;
const selectFresh: TenSelector<readonly (Fresh | null)[]> = (ten: TenSliceState) => ten.fresh;
const selectComplete: TenSelector<readonly Complete[]> = (ten: TenSliceState) => ten.complete;

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

const completeFresh: (fresh: Fresh) => Complete = (fresh: Fresh) => {
    const { id } = fresh;
    return { id };
};

const checkIndex = <T>(array: readonly T[], index: number) => {
    const { length } = array;
    if (index < 0 || index >= length) {
        throw Error(`${index} out of bounds of array of length ${length}`);
    }
};

export const tenSlice = createSlice({
    name: "ten",

    initialState,

    reducers: {
        edit: ({ entry }, { payload: { id, value } }: PayloadAction<EditAction>) => {
            checkIndex(entry, id);

            entry[id].value = value;
        },

        create: ({ fresh, entry }, { payload: { index } }: PayloadAction<CreateAction>) => {
            checkIndex(fresh, index);
            if (fresh[index]) {
                throw Error(`fresh ${index} is non-empty`);
            }

            const id = entry.length;
            entry.push({ value: '' });
            fresh[index] = { id };
        },

        complete: ({ fresh, complete }, { payload: { index } }: PayloadAction<CompleteAction>) => {
            checkIndex(fresh, index);

            const oldFresh = fresh[index];
            if (!oldFresh) {
                throw Error(`fresh ${index} is empty`);
            }
            fresh[index] = null;

            complete.unshift(completeFresh(oldFresh));
        },

        swap: ({ fresh }, { payload: { leftIndex, rightIndex } }: PayloadAction<SwapAction>) => {
            checkIndex(fresh, leftIndex);
            checkIndex(fresh, rightIndex);

            const leftFresh = fresh[leftIndex];
            fresh[leftIndex] = fresh[rightIndex];
            fresh[rightIndex] = leftFresh;
        }
    },

    selectors: {
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
    selectEntryFresh, selectEntryComplete
} = tenSlice.selectors;
