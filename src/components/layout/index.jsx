import { createContext, useContext } from "react";
import { PageRenderer } from "gatsby";
import { LoadingPage } from "../../features/page";
import { useClient, usePrevLocation } from "../../features/util";
import { OverlayLayout, Layout } from "../../features/layout";
export {
    onPreRouteUpdate, onRouteUpdateDelayed, onRouteUpdate
} from "../../features/util";

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

    return <OverlayLayout
               {...props}
               previous={
                   client &&
                       <Layout>
                           {prevPage}
                       </Layout>
               }
           >
               <Layout>
                   {children}
               </Layout>
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

export const shouldUpdateScroll = () => true;
