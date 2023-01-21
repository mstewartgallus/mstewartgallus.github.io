import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

const store = createStore(reducer);

export const Root = ({ children }) =>
<React.StrictMode>
    <Provider store={store}>
        {children}
    </Provider>
</React.StrictMode>;

export default Root;
