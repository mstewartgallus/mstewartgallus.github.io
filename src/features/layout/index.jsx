import { lazy, Suspense } from "react";
import { FocusProvider } from "@features/focus";

const ViewTransition = lazy(() => import("./view-transition.jsx"));

export const Layout = ({ children }) =>
<>
    <FocusProvider>
        {children}
    </FocusProvider>
    <Suspense>
        <ViewTransition />
    </Suspense>
</>;
