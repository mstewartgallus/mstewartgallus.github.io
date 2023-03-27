import { Suspense, forwardRef, useImperativeHandle } from "react";
import { useScrollRestoration } from "gatsby"
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
    const scroll = useScrollRestoration(`layout`)
    useImperativeHandle(ref, () => new LayoutHandle(), []);
    return <div className={layout} {...scroll}>
               <Suspense fallback={<Loading />}>
                   {children}
               </Suspense>
           </div>;
}

const LayoutRef = forwardRef(Layout);

export { LayoutRef as Layout, LayoutRef as default };
