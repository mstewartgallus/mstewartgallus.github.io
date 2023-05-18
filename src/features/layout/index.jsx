import { useRef } from "react";
import { RouteAnnouncer } from "@features/announce";
import { Client } from "@features/client";
import { LocationProvider } from "@features/location";
import { PerLocation } from "./per-location.jsx";

export const Layout = ({ children, location }) =>
<RouteAnnouncer>
    <LocationProvider location={location}>
        <PerLocation pathname={location.pathname}>
            {children}
        </PerLocation>
    </LocationProvider>
</RouteAnnouncer>;
