import { Suspense, useEffect, useRef } from "react";
import { Theme } from "../../features/ui";
import { Loading, FocusProvider } from "../../features/layout";

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
            if (!prevLocation) {
                return;
            }

            if (prevLocation.pathname === location.pathname && location.hash) {
                return;
            }

            if (ignore) {
                return;
            }

            window.queueMicrotask(() => {
                if (ignore) {
                    return;
                }

                ref.current.focus(options);
            });
        };
        callbacks.add(callback);
        return () => {
            ignore = true;
            callbacks.delete(callback);
        };
    }, []);
    return ref;
};

const Layout = ({children}) => {
    const ref = useFocus();
    return <FocusProvider value={ref}>
               <Theme>
                   <Suspense fallback={<Loading />}>
                       {children}
                   </Suspense>
               </Theme>
           </FocusProvider>;
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
