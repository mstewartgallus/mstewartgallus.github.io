import { StrictMode } from "react";
import { Provider } from "react-redux";
import * as Store from "../state/store.js";

const Root = ({ children }) => {
    const store = Store.createStore();
    return <StrictMode>
               <Provider store={store}>
                   {children}
               </Provider>
           </StrictMode>;
};

export const wrapRootElement = ({props, element}) => {
    return <Root {...props}>{element}</Root>;
};

export const onPreRouteUpdate = () => {
};

export const onRouteUpdate = () => {
};

export const onRouteUpdateDelayed = () => {
};
