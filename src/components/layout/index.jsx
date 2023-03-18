import { Suspense, forwardRef, useImperativeHandle } from "react";
import { Loading } from "../../features/layout";
import { layout } from "./layout.module.css";

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

const LayoutImpl = ({ children }) =>
<div className={layout}>
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
</div>;

export const Layout = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => new LayoutHandle(), []);
    return <LayoutImpl {...props} />;
});

export default Layout;
