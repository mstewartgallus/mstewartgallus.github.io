import * as React from "react";
import { Provider } from "react-redux";
import * as Store from "../../src/state/store.js";

const RootImpl = ({ children }, ref) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    React.useImperativeHandle(ref, () => ({
        onPreRouteUpdate() {
        },
        onRouteUpdate() {
        },
        onRouteUpdateDelayed() {
        }
    }), []);


    return <React.StrictMode>
               <Provider store={store}>
                   {children}
               </Provider>
           </React.StrictMode>;
};

export const Root = React.forwardRef(RootImpl);

export default Root;
