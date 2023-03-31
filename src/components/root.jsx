import { StrictMode, useSyncExternalStore } from "react";
import { Provider } from "react-redux";
import { MDXProvider } from '@mdx-js/react';
import { setPrevLocation } from "../features/util";
import { defaults } from "../features/mdx";
import * as Store from "../state/store.js";

const Root = ({ children }) => {
    const store = Store.createStore();
    return <StrictMode>
               <Provider store={store}>
                   <MDXProvider components={defaults}>
                       {children}
                   </MDXProvider>
               </Provider>
           </StrictMode>;
};

export const wrapRootElement = ({props, element}) => {
    return <Root {...props}>{element}</Root>;
};

export const onPreRouteUpdate = () => {
};

export const onRouteUpdate = ({ prevLocation }) => {
    if (!prevLocation) {
        return;
    }
    setPrevLocation(prevLocation);
};

export const onRouteUpdateDelayed = () => {
};
