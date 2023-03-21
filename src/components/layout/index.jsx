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

const Layout = ({ children }, ref) => {
    useImperativeHandle(ref, () => new LayoutHandle(), []);
    return <div className={layout}>
               <Suspense fallback={<Loading />}>
                   {children}
               </Suspense>
           </div>;
}

const LayoutRef = forwardRef(Layout);

export { LayoutRef as Layout, LayoutRef as default };
