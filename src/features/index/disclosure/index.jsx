import { Suspense, lazy } from "react";
import { H2 } from "@features/ui";

const DisclosureClient = lazy(() => import("./client.jsx"));

const DisclosureServer = ({id, children, heading}) =>
<nav aria-labelledby={id}>
    <header>
        <hgroup>
            <H2 tabIndex="-1" id={id}>
                {heading}
            </H2>
        </hgroup>
    </header>
    {children}
</nav>;

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
