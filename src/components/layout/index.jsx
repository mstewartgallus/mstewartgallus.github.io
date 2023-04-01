import { Suspense, useMemo, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { Theme, A } from "../../features/ui";
import { Assistive } from "../../features/util";
import { Loading } from "../../features/layout";
import { skipLink } from "./layout.module.css";

let isFresh = true;

const SkipLink = () => {
    const ref = useRef();
    const location = useLocation();
    const pathname = useMemo(() => location.pathname, [location]);

    useEffect(() => {
        if (isFresh) {
            return;
        }
        let cancel = false;
        window.queueMicrotask(() => {
            if (cancel) {
                return;
            }
            ref.current.focus({
                preventScroll: true,
                focusVisible: true
            });
        });
        return () => cancel = true;
    }, [pathname]);
    return <A ref={ref} className={skipLink} href="#content"
              aria-describedby="content">Skip to content</A>;
};

const Layout = ({children}) =>
<Theme>
    <Assistive>
        <SkipLink />
    </Assistive>
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
</Theme>;

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onRouteUpdate = () => {
    isFresh = false;
};

export const onPreRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};

export const shouldUpdateScroll = () => {
    return true;
};
