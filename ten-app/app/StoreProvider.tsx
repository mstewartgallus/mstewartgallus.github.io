"use client";

import type { AppStore } from "@/lib/store";
import type { Persistor } from "redux-persist";
import type { ReactNode } from "react";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createContext, useContext, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate as ReduxPersistGate } from "redux-persist/integration/react";

const PersistorContext = createContext<Persistor | null>(null);

interface PersistProps {
  readonly children: ReactNode;
  readonly loading: ReactNode;
}

export const PersistGate = ({ children, loading }: PersistProps) => {
    const persistor = useContext(PersistorContext);
    if (!persistor) {
        return null;
    }

    return <ReduxPersistGate loading={loading} persistor={persistor}>
        {children}
    </ReduxPersistGate>;
};

interface Props {
  readonly children: ReactNode;
}

interface StoreState {
    store: AppStore;
    persistor: Persistor;
}
export const StoreProvider = ({ children }: Props) => {
    const ref = useRef<StoreState | null>(null);

    if (!ref.current) {
        // Create the store instance the first time this renders
        const store = makeStore();
        const persistor = persistStore(store);
        ref.current = { store, persistor };
    }

    useEffect(() => {
        const state = ref.current;
        if (!state) {
            return;
        }
        // configure listeners using the provided defaults
        // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
        return setupListeners(state.store.dispatch);
    }, []);

    const state = ref.current;
    if (!state) {
        return null;
    }

    return <Provider store={state.store}>
        <PersistorContext.Provider value={state.persistor}>
            {children}
        </PersistorContext.Provider>
    </Provider>;
};
