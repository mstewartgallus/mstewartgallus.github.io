import { Suspense, forwardRef, useImperativeHandle } from "react";
import { Theme } from "../../features/ui";
import { Loading } from "../../features/layout";


const Layout = ({ children }, ref) => {
    useImperativeHandle(ref, () => ({
        onPreRouteUpdate() {
        },
        onRouteUpdate() {
        },
        onRouteUpdateDelayed() {
        },
        shouldUpdateScroll() {
            return true;
        }
    }), []);

    return <Theme>
               <Suspense fallback={<Loading />}>
                   {children}
               </Suspense>
           </Theme>;
}

const LayoutRef = forwardRef(Layout);

export { LayoutRef as Layout, LayoutRef as default };
