import { Suspense, forwardRef, useImperativeHandle } from "react";
import { Theme } from "../../features/ui";
import { Loading } from "../../features/layout";

class LayoutHandle {
    onPreRouteUpdate() {
    }

    onRouteUpdate() {
    }

    onRouteUpdateDelayed() {
    }
    shouldUpdateScroll() {
        return true;
    }
};

const Layout = ({ children }, ref) => {
    useImperativeHandle(ref, () => new LayoutHandle(), []);
    return <Theme>
               <Suspense fallback={<Loading />}>
                   {children}
               </Suspense>
           </Theme>;
}

const LayoutRef = forwardRef(Layout);

export { LayoutRef as Layout, LayoutRef as default };
