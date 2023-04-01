import { Suspense, useEffect, useRef, useState } from "react";
import { useClient } from "../../features/util";
import { Theme } from "../../features/ui";
import { Loading, FocusProvider } from "../../features/layout";
import { overlap, wrapper } from "./layout.module.css";

const options = {
    preventScroll: true,
    focusVisible: true
};

const callbacks = new Set();

const useFocus = () => {
    const ref = useRef();
    useEffect(() => {
        let ignore = false;
        const callback = ({prevLocation, location}) => {
            if (ignore) {
                return;
            }

            if (!prevLocation) {
                return;
            }

            if (prevLocation.pathname === location.pathname && location.hash) {
                return;
            }

            ref.current.focus(options);
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, []);
    return ref;
};

const Wrapper = ({children, ...props}) =>
<div className={wrapper} {...props}>
    {children}
</div>;

const Layout = ({children}) => {
    const ref = useFocus();
    const fake = useRef();
    const client = useClient();
    return <Theme>
               <div className={overlap}>
                   <FocusProvider value={ref}>
                       <Wrapper>
                           <Suspense fallback={<Loading />}>
                               {children}
                           </Suspense>
                       </Wrapper>
                   </FocusProvider>
                   {
                       client &&
                           <FocusProvider ref={fake}>
                               <Wrapper inert="inert">
                                   <Loading />
                               </Wrapper>
                           </FocusProvider>
                   }
               </div>
           </Theme>;
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
