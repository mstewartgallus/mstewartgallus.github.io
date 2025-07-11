import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { tenSlice } from "./features/ten/tenSlice";

const rootReducer = combineSlices(tenSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => configureStore({
    reducer: rootReducer
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
