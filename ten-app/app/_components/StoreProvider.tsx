"use client";

import type { AppStore } from "@/lib/store";
import type { Persistor } from "redux-persist";
import type { ReactNode } from "react";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createContext, useContext, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const BootstrappedContext = createContext<boolean>(false);

export const usePersistBootstrapped = () => useContext(BootstrappedContext);

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
        <PersistGate persistor={state.persistor}>
        {
            bootstrapped =>
                <BootstrappedContext.Provider value={bootstrapped}>
                   {children}
                </BootstrappedContext.Provider>
        }
        </PersistGate>
    </Provider>;
};
