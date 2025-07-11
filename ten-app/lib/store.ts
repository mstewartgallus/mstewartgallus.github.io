import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tenSlice } from "./features/ten/tenSlice";

const persistConfig = { key: "root3", storage };

const rootReducer = persistReducer(persistConfig, combineSlices(tenSlice));

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            }
        })
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
