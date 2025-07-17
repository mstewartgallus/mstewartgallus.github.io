import type { PayloadAction, Selector } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PointerEventHandler } from "react";

export type Cursor = 'grabbing';

export interface HtmlSliceState {
    onPointerUpArray: PointerEventHandler<HTMLHtmlElement>[];
    onPointerLeaveArray: PointerEventHandler<HTMLHtmlElement>[];
    cursor?: Cursor;
};

const initialState: HtmlSliceState = {
    onPointerUpArray: [],
    onPointerLeaveArray: []
};

type HtmlSelector<T> = Selector<HtmlSliceState, T>;

const selectOnPointerUpArray: HtmlSelector<PointerEventHandler<HTMLHtmlElement>[]> =
    (html: HtmlSliceState) => html.onPointerUpArray;
const selectOnPointerLeaveArray: HtmlSelector<PointerEventHandler<HTMLHtmlElement>[]> =
    (html: HtmlSliceState) => html.onPointerLeaveArray;

interface PointerUpHook {
    type: 'pointerup';
    value: PointerEventHandler<HTMLHtmlElement>;
}

interface PointerLeaveHook {
    type: 'pointerleave';
    value: PointerEventHandler<HTMLHtmlElement>;
}

export type Hook =
    | PointerUpHook
    | PointerLeaveHook;

const selectHook = (type: Hook["type"], state: HtmlSliceState) => {
    switch (type) {
        case 'pointerup':
            return selectOnPointerUpArray(state);

        case 'pointerleave':
            return selectOnPointerLeaveArray(state);
    }
}

const toHandler = <T>(handlers: readonly ((event: T) => void)[]) =>
    (event: T) => {
        for (const handler of handlers) {
            handler(event);
        };
    };


export const htmlSlice = createSlice({
    name: "html",

    initialState,

    reducers: create => ({
        addHook: create.reducer((
            state: HtmlSliceState,
            { payload }: PayloadAction<Hook>
        ) => {
            selectHook(payload.type, state).push(payload.value);
        }),

        removeHook: create.reducer((
            state: HtmlSliceState,
            { payload }: PayloadAction<Hook>
        ) => {
            const array = selectHook(payload.type, state);
            const index = array.indexOf(payload.value);
            array.splice(index);
        }),

        cursor: create.reducer((
            state: HtmlSliceState,
            { payload }: PayloadAction<Cursor | undefined>
        ) => {
            state.cursor = payload;
        }),
    }),

    selectors: {
        selectOnPointerUp: createSelector([selectOnPointerUpArray], toHandler),
        selectOnPointerLeave: createSelector([selectOnPointerLeaveArray], toHandler),
        selectCursor: html => html.cursor
    },
});

export const {
    addHook, removeHook, cursor
} = htmlSlice.actions;

export const {
    selectOnPointerUp,
    selectOnPointerLeave,
    selectCursor
} = htmlSlice.selectors;
