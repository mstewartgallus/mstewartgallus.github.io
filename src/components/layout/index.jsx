import { Suspense } from "react";
import { Theme } from "../../features/ui";
import { Loading, FocusProvider } from "../../features/layout";

const ref = { current: null };

export const onRouteUpdate = ({location, prevLocation}) => {
    if (!prevLocation) {
        return;
    }

    if (location.hash) {
        return;
    }

    window.queueMicrotask(() => {
        ref.current.focus({
            preventScroll: true,
            focusVisible: true
        });
    });
};

export const wrapPageElement = ({ element, props }) =>
<FocusProvider value={ref}>
    <Theme>
        <Suspense fallback={<Loading />}>
            {element}
        </Suspense>
    </Theme>
</FocusProvider>;

export const onPreRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};

export const shouldUpdateScroll = () => {
    return true;
};
