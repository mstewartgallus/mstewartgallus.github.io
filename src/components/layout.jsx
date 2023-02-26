import * as React from "react";
import { layout } from "./layout.module.css";
import ErrorBoundary from "./error-boundary.jsx";
import Error from "./error.jsx";
import Page from "./page.jsx";
import { parse } from "../utils/error.js";

const Err = ({children}) =>
<ErrorBoundary
    fallback={e =>
        parse(e).map(({message, name, stack}) =>
            <Error message={message} name={name} stack={stack} />)
    }>
    {children}
</ErrorBoundary>;

const Loading = () =>
<Page heading={<h1>Loading...</h1>}>
    <p>Loading...</p>
</Page>;

const LayoutImpl = ({ children }, ref) => {

    React.useImperativeHandle(ref, () => ({
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
               <React.Suspense fallback={<Loading />}>
                   {children}
               </React.Suspense>
           </div>;
};

export const Layout = React.forwardRef(LayoutImpl);

export default Layout;
