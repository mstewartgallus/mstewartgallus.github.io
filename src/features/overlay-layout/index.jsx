import { memo, createContext, useContext } from "react";
import { PageRenderer } from "gatsby";
import { LoadingPage } from "../../features/page";
import { usePrevLocation } from "../../features/prev-location";
import { useClient } from "../../features/util";
import { OverlayLayout } from "./overlay-layout";

const PREVIOUS_PAGE = false;

const Nest = createContext(false);
Nest.displayName = 'Nest';

const NestProvider = memo(Nest.Provider);

const NestedPageRenderer = ({location}) =>
<NestProvider value={true}>
    <PageRenderer location={location} />
</NestProvider>;

const PageRendererDefault = ({location}) =>
      location ? <NestedPageRenderer location={location} /> : <LoadingPage />;

const PageRendererPrevious = () => {
    const prevLocation = usePrevLocation();
    return <PageRendererDefault location={prevLocation} />;
};

const PageRendererPreviousChoice = PREVIOUS_PAGE ? PageRendererPrevious : LoadingPage;

const PreviousPage = () => {
    const client = useClient();
    return client && <PageRendererPreviousChoice />;
};

const PreviousPageMemo = memo(PreviousPage);

const Pages = ({ children }) =>
<OverlayLayout previous={<PreviousPageMemo />}>
    {children}
</OverlayLayout>

const PagesMemo = memo(Pages);

const Shim = ({ children }) => {
    const nested = useContext(Nest);
    return nested ? children : <PagesMemo>{children}</PagesMemo>;
};

const ShimMemo = memo(Shim);

export const wrapPageElement = ({ element, props }) => <ShimMemo>{element}</ShimMemo>;
