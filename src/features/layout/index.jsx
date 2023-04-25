import { useDeferredValue, lazy, Suspense } from "react";
import { usePrevious } from "@features/util";
import { LocationProvider } from "@features/location";

const ViewTransition = lazy(() => import("./view-transition.jsx"));

export const Layout = ({ children, location }) => {
    location = useDeferredValue(location);
    // FIXME set origin as well ?
    const prevLocation = usePrevious(location);
    return <LocationProvider location={location} prevLocation={prevLocation}>
               {children}
               <Suspense>
                   <ViewTransition />
               </Suspense>
           </LocationProvider>;
};
