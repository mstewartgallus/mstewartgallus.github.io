import { Suspense, lazy } from "react";
import { viewport } from "./viewport.module.css";

// Get rid of a warning of using useLayoutEffect on the server in a
// silly convolutaed way
const ScrollClient = lazy(() => import('./scroll-client.jsx'));

const Scroll = ({scrolled}) =>
<Suspense fallback={scrolled({})}>
    <ScrollClient scrolled={scrolled} />
</Suspense>;

export const Viewport = ({children}) =>
<Scroll
    scrolled=
    {
        scroll => <div className={viewport} {...scroll}>{children}</div>
    }
/>;
