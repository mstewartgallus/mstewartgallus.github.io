import { StrictMode, useImperativeHandle, forwardRef } from "react";
import { Provider } from "react-redux";
import { MDXProvider } from '@mdx-js/react';
import { defaults } from "../features/mdx";
import * as Store from "../state/store.js";

class RootHandle {
    onPreRouteUpdate() {
    }
    onRouteUpdate() {
    }
    onRouteUpdateDelayed() {
    }
}

const Root = ({ children }, ref) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    useImperativeHandle(ref, () => new RootHandle(), []);

    return <StrictMode>
               <Provider store={store}>
                   <MDXProvider components={defaults}>
                       {children}
                   </MDXProvider>
               </Provider>
           </StrictMode>;
};

const RootRef = forwardRef(Root);

export { RootRef as Root, RootRef as default };
