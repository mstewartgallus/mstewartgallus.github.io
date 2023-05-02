import { LocationProvider } from "@features/location";
import { PerLocation } from "./per-location.jsx";

export const Layout = ({ children, location }) =>
<LocationProvider location={location}>
    <PerLocation pathname={location.pathname}>
        {children}
    </PerLocation>
</LocationProvider>;
