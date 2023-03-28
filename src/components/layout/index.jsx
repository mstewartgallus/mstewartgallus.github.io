import { Suspense, forwardRef, useImperativeHandle } from "react";
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
    return <Suspense fallback={<Loading />}>
               {children}
           </Suspense>;
}

const LayoutRef = forwardRef(Layout);

export { LayoutRef as Layout, LayoutRef as default };
