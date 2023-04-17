import { StrictMode } from "react";
import { ClientProvider } from "@features/util";

const Root = ({ children }) =>
<StrictMode>
    <ClientProvider>
        {children}
    </ClientProvider>
</StrictMode>;

export const wrapRootElement = ({element}) =>
<Root>{element}</Root>;
