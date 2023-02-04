import * as React from "react";
import { Provider } from "react-redux";
import Layout from "../../src/components/layout.jsx";
import * as Store from "../../src/state/store.js";

export const wrapRootElement = ({ element }) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    return <React.StrictMode>
               <Provider store={store}>
                   {element}
               </Provider>
           </React.StrictMode>;
};

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
