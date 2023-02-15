import * as React from "react";
import { Provider } from "react-redux";
import * as Store from "../../src/state/store.js";

export const Root = ({children}) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    return <React.StrictMode>
               <Provider store={store}>
                   {children}
               </Provider>
           </React.StrictMode>;
};

export default Root;
