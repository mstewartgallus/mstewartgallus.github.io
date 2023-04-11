import { Suspense } from "react";
import { LoadingPage } from "../loading-page.jsx";

export const Layout = ({children}) =>
<Suspense fallback={<LoadingPage />}>
    {children}
</Suspense>;
