import { StrictMode, useImperativeHandle, forwardRef } from "react";
import { Provider } from "react-redux";
import { MDXProvider } from '@mdx-js/react';
import {
    MdxPage,
    H1, H2, H3, H4, H5, H6,
} from "../features/mdx";
import { Caesura, L, Lg } from "../features/poem";
import {
    A,
    Blockquote,
    Code,
    Ul, Ol, Menu, Li,
    Hr,
    P,
    Pre,
    Green
} from "../features/ui";
import * as Store from "../state/store.js";

const shortcodes = {
    A,
    Green,
    Lg, L, Caesura
};
const autolinkHeadings = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

const defaultComponents = {
    ...shortcodes,
    ...autolinkHeadings,
    ul: Ul, ol: Ol, menu: Menu, li: Li,
    p: P,
    a: A,
    blockquote: Blockquote,
    code: Code,
    pre: Pre,
    hr: Hr,
    wrapper: MdxPage
};

class RootHandle {
    onPreRouteUpdate() {
    }
    onRouteUpdate() {
    }
    onRouteUpdateDelayed() {
    }
}

const RootImpl = ({ children }, ref) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    useImperativeHandle(ref, () => new RootHandle(), []);

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
