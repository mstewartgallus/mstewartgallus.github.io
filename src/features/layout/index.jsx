import { LocationProvider } from "@features/location";

export const Layout = ({ children, location }) =>
<LocationProvider location={location}>
    {children}
</LocationProvider>;
