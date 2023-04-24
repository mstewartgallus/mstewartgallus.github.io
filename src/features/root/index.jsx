import { StrictMode } from "react";
import { ClientProvider } from "@features/util";

export const Root = ({ children }) =>
<StrictMode>
    <ClientProvider>
        {children}
    </ClientProvider>
</StrictMode>;
