import { Suspense } from "react";
import { Theme, A } from "../../features/ui";
import { Assistive } from "../../features/util";
import { Loading } from "../../features/layout";
import { skipLink } from "./layout.module.css";

const ref = { current: null };

const Layout = ({children}) =>
<Theme>
    <Assistive>
        <A ref={ref} className={skipLink} href="#content"
           aria-describedby="content">Skip to content</A>
    </Assistive>
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
</Theme>;

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onRouteUpdate = ({ prevLocation, location }) => {
    if (!prevLocation) {
        return;
    }

    if (location.hash && prevLocation.pathname === location.pathname) {
        return;
    }

    window.queueMicrotask(() => {
        ref.current.focus({
            preventScroll: true,
            focusVisible: true
        });
    });
};

export const onPreRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};

export const shouldUpdateScroll = () => {
    return true;
};
