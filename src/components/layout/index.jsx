import { Suspense, useEffect, useState } from "react";
import { useClient, UnderProvider, PrevLocationProvider } from "../../features/util";
import { Theme } from "../../features/ui";
import { Loading } from "../../features/layout";
import { overlap, wrapper } from "./layout.module.css";

const callbacks = new Set();

const usePrevLocation = () => {
    const [prevLocation, setState] = useState(null);
    useEffect(() => {
        let ignore = false;
        const callback = ({prevLocation}) => {
            if (ignore) {
                return;
            }

            setState(prevLocation);
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, []);
    return prevLocation;
};

const Wrapper = ({children, ...props}) =>
<div className={wrapper} {...props}>
    {children}
</div>;

const Layout = ({children}) => {
    const prevLocation = usePrevLocation();
    const client = useClient();
    return <PrevLocationProvider value={prevLocation}>
               <Theme>
                   <div className={overlap}>
                       <UnderProvider value={false}>
                           <Wrapper>
                               <Suspense fallback={<Loading />}>
                                   {children}
                               </Suspense>
                           </Wrapper>
                       </UnderProvider>
                       {
                           client &&
                               <UnderProvider value={true}>
                                   <Wrapper inert="inert">
                                       <Loading />
                                   </Wrapper>
                               </UnderProvider>
                       }
                   </div>
               </Theme>
           </PrevLocationProvider>;
};

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onPreRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};

export const shouldUpdateScroll = () => {
    return true;
};

export const onRouteUpdate = ({ prevLocation, location }) => {
    for (const cb of Array.from(callbacks)) {
        cb({ prevLocation, location });
    }
};
