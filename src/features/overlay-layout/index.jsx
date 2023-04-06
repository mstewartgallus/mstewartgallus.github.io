import { createContext, useContext } from "react";
import { PageRenderer } from "gatsby";
import { LoadingPage } from "../../features/page";
import { usePrevLocation } from "../../features/prev-location";
import { useClient } from "../../features/util";
import { OverlayLayout } from "./overlay-layout";

const PREVIOUS_PAGE = false;

const Pages = ({ children, ...props }) => {
    const client = useClient();
    const prevLocation = usePrevLocation();

    let prevPage;
    if (PREVIOUS_PAGE) {
        prevPage = prevLocation ?
            <PageRenderer location={prevLocation} /> : <LoadingPage />;
    } else {
        prevPage = <LoadingPage />;
    }

    return <OverlayLayout {...props} previous={client && prevPage}>
               {children}
           </OverlayLayout>;
};

const Nest = createContext(false);
Nest.displayName = 'Nest';

const Shim = ({ children, ...props }) => {
    const nested = useContext(Nest);
    if (nested) {
        return children;
    }
    return <Nest.Provider value="true">
               <Pages {...props}>
                   {children}
               </Pages>
           </Nest.Provider>;
};

export const wrapPageElement = ({ element, props }) => {
    return <Shim {...props}>{element}</Shim>;
}
