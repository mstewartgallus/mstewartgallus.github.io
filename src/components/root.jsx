import { StrictMode, useImperativeHandle, forwardRef } from "react";
import { Provider } from "react-redux";
import { MDXProvider } from '@mdx-js/react';
import * as Store from "../../src/state/store.js";
import { Caesura, L, Lg } from "../features/poem";
import A from "./a.tsx";
import Green from "./green";
import { H1, H2, H3, H4, H5, H6 } from "./heading.jsx";
import MdxPage from "./mdx-page.jsx";

const shortcodes = {
    A,
    Green,
    Lg, L, Caesura,
    H1, H2, H3, H4, H5, H6
};
const autolinkHeadings = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

const defaultComponents = {
    ...shortcodes,
    ...autolinkHeadings,
    wrapper: MdxPage
};

const RootImpl = ({ children }, ref) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    useImperativeHandle(ref, () => ({
        onPreRouteUpdate() {
        },
        onRouteUpdate() {
        },
        onRouteUpdateDelayed() {
        }
    }), []);

    return <StrictMode>
               <Provider store={store}>
                   <MDXProvider components={defaultComponents}>
                       {children}
                   </MDXProvider>
               </Provider>
           </StrictMode>;
};

export const Root = forwardRef(RootImpl);

export default Root;
