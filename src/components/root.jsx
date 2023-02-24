import * as React from "react";
import { Provider } from "react-redux";
import * as Store from "../../src/state/store.js";

const init = {
    loading: true,
    longLoad: false
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'onPreRouteUpdate':
        return { ...state, loading: true };
    case 'onRouteUpdate':
        return { ...state, loading: false, longLoad: false };
    case 'onRouteUpdateDelayed':
        return { ...state, longLoad: true };
    default:
        return state;
    }
};

const RootImpl = ({ children }, ref) => {
    // Create a different store per SSR page
    const store = Store.createStore();

    const [state, dispatch] = React.useReducer(reducer, init);

    React.useImperativeHandle(ref, () => ({
        onPreRouteUpdate() {
            dispatch({ type: 'onPreRouteUpdate' });
        },
        onRouteUpdate() {
            dispatch({ type: 'onRouteUpdate' });
        },
        onRouteUpdateDelayed() {
            dispatch({ type: 'onRouteUpdateDelayed' });
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
