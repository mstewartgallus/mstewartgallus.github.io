import { Suspense, lazy } from "react";
import { DisclosureServer } from "../disclosure-server";

const DisclosureClient = lazy(() => import("../disclosure-client"));

export const Disclosure = ({id, children, heading, open, onClick}) =>
<Suspense
    fallback={
        <DisclosureServer id={id} heading={heading}>
            {children}
        </DisclosureServer>
    }>
    <DisclosureClient id={id} heading={heading} open={open} onClick={onClick}>
        {children}
    </DisclosureClient>
</Suspense>;
