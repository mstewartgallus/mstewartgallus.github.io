import * as React from "react";
import { Provider } from "react-redux";
import { MDXProvider } from "@mdx-js/react";
import Layout from "./src/components/layout.jsx";
import { MDXWrapper } from "./src/components/mdx-wrapper.jsx";
import * as Store from "./src/state/store.js";

const components = { wrapper: MDXWrapper };

export const wrapRootElement = ({ element }) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    return <React.StrictMode>
               <Provider store={store}>
                   <MDXProvider components={components}>
                       {element}
                   </MDXProvider>
               </Provider>
           </React.StrictMode>;
};

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
