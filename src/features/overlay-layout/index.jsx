import { memo, createContext, useContext } from "react";
import { PageRenderer } from "gatsby";
import { LoadingPage } from "../../features/page";
import { usePrevLocation } from "../../features/prev-location";
import { useClient } from "../../features/util";
import { OverlayLayout } from "./overlay-layout";

const PREVIOUS_PAGE = false;

const PageRendererDefault = ({location}) =>
      location ? <PageRenderer location={location} /> : <LoadingPage />;

const PageRendererPrevious = () => {
    const prevLocation = usePrevLocation();
    return <PageRendererDefault location={prevLocation} />;
};

const PageRendererPreviousChoice = PREVIOUS_PAGE ? PageRendererPrevious : LoadingPage;

const PreviousPage = () => {
    const client = useClient();

    if (!client) {
        return null;
    }

    return <PageRendererPreviousChoice />;
};

const PreviousPageMemo = memo(PreviousPage);

const Pages = ({ children }) =>
<OverlayLayout previous={<PreviousPageMemo />}>
    {children}
</OverlayLayout>;

const PagesMemo = memo(Pages);

const Nest = createContext(false);
Nest.displayName = 'Nest';

const NestProvider = memo(Nest.Provider);

const Shim = ({ children }) => {
    const nested = useContext(Nest);
    if (nested) {
        return children;
    }
    return <NestProvider value={true}>
               <PagesMemo>
                   {children}
               </PagesMemo>
           </NestProvider>;
};

const ShimMemo = memo(Shim);

export const wrapPageElement = ({ element, props }) => {
    return <ShimMemo {...props}>{element}</ShimMemo>;
}
