import { Suspense, forwardRef, useImperativeHandle } from "react";
import { layout } from "./layout.module.css";
import Page from "../page";

const Loading = () =>
<Page heading={<h1 tabIndex="-1">Loading...</h1>}>
    <p>Loading...</p>
</Page>;

const LayoutImpl = ({ children }, ref) => {
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

    return <div className={layout}>
               <Suspense fallback={<Loading />}>
                   {children}
               </Suspense>
           </div>;
};

export const Layout = forwardRef(LayoutImpl);

export default Layout;
