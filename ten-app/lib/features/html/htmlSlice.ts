import type { PayloadAction, Selector } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { MouseEventHandler } from "react";

export type Cursor = 'grabbing';

export interface HtmlSliceState {
    onMouseUpArray: MouseEventHandler<HTMLHtmlElement>[];
    onMouseLeaveArray: MouseEventHandler<HTMLHtmlElement>[];
    cursor?: Cursor;
};

const initialState: HtmlSliceState = {
    onMouseUpArray: [],
    onMouseLeaveArray: []
};

type HtmlSelector<T> = Selector<HtmlSliceState, T>;

const selectOnMouseUpArray: HtmlSelector<MouseEventHandler<HTMLHtmlElement>[]> =
    (html: HtmlSliceState) => html.onMouseUpArray;
const selectOnMouseLeaveArray: HtmlSelector<MouseEventHandler<HTMLHtmlElement>[]> =
    (html: HtmlSliceState) => html.onMouseLeaveArray;

interface MouseUpHook {
    type: 'mouseup';
    value: MouseEventHandler<HTMLHtmlElement>;
}

interface MouseLeaveHook {
    type: 'mouseleave';
    value: MouseEventHandler<HTMLHtmlElement>;
}

export type Hook =
    | MouseUpHook
    | MouseLeaveHook;

const selectHook = (type: Hook["type"], state: HtmlSliceState) => {
    switch (type) {
        case 'mouseup':
            return selectOnMouseUpArray(state);

        case 'mouseleave':
            return selectOnMouseLeaveArray(state);
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
        selectOnMouseUp: createSelector([selectOnMouseUpArray], toHandler),
        selectOnMouseLeave: createSelector([selectOnMouseLeaveArray], toHandler),
        selectCursor: html => html.cursor
    },
});

export const {
    addHook, removeHook, cursor
} = htmlSlice.actions;

export const {
    selectOnMouseUp,
    selectOnMouseLeave,
    selectCursor
} = htmlSlice.selectors;
