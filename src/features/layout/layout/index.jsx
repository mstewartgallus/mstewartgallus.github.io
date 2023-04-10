import { Suspense } from "react";
import { LoadingPage } from "@features/page";

export const Layout = ({children}) =>
<Suspense fallback={<LoadingPage />}>
    {children}
</Suspense>;
