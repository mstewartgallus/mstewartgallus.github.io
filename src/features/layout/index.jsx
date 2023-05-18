import { RouteAnnouncer } from "@features/announce";
import { LocationProvider } from "@features/location";
import { ScrollProvider } from "@features/root-scroller";

export const Layout = ({ children, location }) =>
<RouteAnnouncer>
    <ScrollProvider pathname={location.pathname}>
        <LocationProvider location={location}>
            {children}
        </LocationProvider>
    </ScrollProvider>
</RouteAnnouncer>;
