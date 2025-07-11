"use client";
import type { AppStore } from "@/lib/store";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);
    const persistorRef = useRef(null);

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

    return <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistorRef.current}>
            {children}
        </PersistGate>
    </Provider>;
};
