import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tenSlice } from "./features/ten/tenSlice";
import { htmlSlice } from "./features/html/htmlSlice";

const persistConfig = {
    key: "root3",
    storage,
    blacklist: ['html']
};

const rootReducer = persistReducer(persistConfig, combineSlices(tenSlice, htmlSlice));

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST", "persist/REHYDRATE",
                    'html/addHook', 'html/removeHook',
                ],
                ignoredPaths: ['html']
            },
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
