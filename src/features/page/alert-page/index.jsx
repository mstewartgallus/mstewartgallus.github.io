import { lazy } from "react";
import { Client } from "@features/util";
import { ViewportPage } from "../viewport-page";

const AlertPageClient = lazy(() => import("./client.jsx"));

// FIXME consider breadcrumbs
export const AlertPage = ({children, heading}) =>
<Client
    fallback={
        <ViewportPage heading={heading}>
            {children}
        </ViewportPage>
    }>
    <AlertPageClient heading={heading}>
        {children}
    </AlertPageClient>
</Client>
