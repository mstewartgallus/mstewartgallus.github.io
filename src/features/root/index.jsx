import { StrictMode } from "react";
import { ClientProvider } from "@features/client";

export const Root = ({ children }) =>
<StrictMode>
    <ClientProvider>
        {children}
    </ClientProvider>
</StrictMode>;
