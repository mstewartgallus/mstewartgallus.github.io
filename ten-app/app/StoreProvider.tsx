"use client";
import type { AppStore } from "@/lib/store";
import type { Persistor } from "redux-persist";
import type { ReactNode } from "react";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);
    const persistorRef = useRef<Persistor | null>(null);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        const store = makeStore();
        storeRef.current = store;
        persistorRef.current = persistStore(store);
    }

    useEffect(() => {
        if (storeRef.current != null) {
            // configure listeners using the provided defaults
            // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
            const unsubscribe = setupListeners(storeRef.current.dispatch);
            return unsubscribe;
        }
    }, []);

    const persistor = persistorRef.current;

    return <Provider store={storeRef.current}>
        {
            persistor !== null ?
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate> : null
        }
    </Provider>;
};
