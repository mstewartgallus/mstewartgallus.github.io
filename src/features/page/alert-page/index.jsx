import { Suspense, lazy } from "react";
import { ViewportPage } from "../viewport-page";

const AlertPageClient = lazy(() => import("./client.jsx"));

// FIXME consider breadcrumbs
export const AlertPage = ({children, heading}) =>
<Suspense
    fallback={
        <ViewportPage heading={heading}>
            {children}
        </ViewportPage>
    }>
    <AlertPageClient heading={heading}>
        {children}
    </AlertPageClient>
</Suspense>
