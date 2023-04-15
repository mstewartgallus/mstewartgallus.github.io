import { Suspense, lazy } from "react";
import { PanelServer } from "../panel-server";

const PanelClient = lazy(() => import("../panel-client"));

export const Panel = ({id, children, heading, open, onClick}) =>
<Suspense
    fallback={
        <PanelServer id={id} heading={heading}>
            {children}
        </PanelServer>
    }>
    <PanelClient id={id} heading={heading} open={open} onClick={onClick}>
        {children}
    </PanelClient>
</Suspense>;
