import { useLocation } from "@reach/router";
import { Suspense } from "react";
import { Loading } from "../../features/layout";
import { useClient, UnderProvider, usePrevLocation, setPrevLocation } from "../../features/util";
import { overlap, wrapper } from "./layout.module.css";

const Wrapper = ({children, ...props}) =>
<div className={wrapper} {...props}>
    {children}
</div>;

const Overlap = ({children}) =>
<div className={overlap}>
    {children}
</div>;

const Previous = () => {
    const client = useClient();
    return client && <Loading />;
};

const Layout = ({children}) => {
    const { pathname } = useLocation();
    const prevLocation = usePrevLocation();
    let prevPathname = prevLocation?.pathname ?? 'previous';
    if (prevPathname === pathname) {
        prevPathname = 'previous';
    }
    return <Overlap>
               <Wrapper key={pathname}>
                   <UnderProvider value={false}>
                       <Suspense fallback={<Loading />}>
                           {children}
                       </Suspense>
                   </UnderProvider>
               </Wrapper>
               <Wrapper key={prevPathname} inert="inert">
                   <UnderProvider value={true}>
                       <Previous />
                   </UnderProvider>
               </Wrapper>
           </Overlap>;
};

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onPreRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};

export const onRouteUpdate = ({prevLocation}) => {
    setPrevLocation(prevLocation);
};

export const shouldUpdateScroll = () => {
    return true;
};
