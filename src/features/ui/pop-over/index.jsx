import { Suspense, lazy } from "react";
import { Context } from "./context.jsx";

const PopOverClient = lazy(() => import("./client.jsx"));

export const PopOver = ({children}) =>
<Suspense fallback={children}>
    <PopOverClient>
        {children}
    </PopOverClient>
</Suspense>;

export const PopOverProvider = Context.Provider;
