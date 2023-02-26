import * as React from "react";
import { layout } from "./layout.module.css";
import ErrorBoundary from "./error-boundary.jsx";
import Error from "./error.jsx";
import Page from "./page.jsx";
import { parse } from "../utils/error.js";

const Default = () => false;

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

const LayoutImpl = ({ location, children }, ref) => {
    const { pathname } = location;

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

    const child = React.Children.only(children);
    const { type, props } = child;

    const {
        Heading = Default,
        Notice = Default,
        Sidebar = Default,
        Foot = Default
    } = type;

    return <>
               <div className={layout}>
                   <React.Suspense fallback={<Loading />}>
                       <Page
                           heading={
                               <Err>
                                   <Heading {...props} key={pathname} />
                               </Err>}
                           notice={
                               <Err>
                                   <Notice {...props} key={pathname} />
                               </Err>}
                           sidebar={
                               <Err>
                                   <Sidebar {...props} key={pathname} />
                               </Err>
                           }>
                           <Err>
                               {children}
                           </Err>
                       </Page>
                   </React.Suspense>
               </div>
               <Err>
                   <Foot {...props} key={pathname} />
               </Err>
           </>;
};

export const Layout = React.forwardRef(LayoutImpl);

export default Layout;
