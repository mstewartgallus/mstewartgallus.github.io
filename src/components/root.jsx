import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MDXProvider } from "@mdx-js/react";
import { MDXWrapper } from "./mdx-wrapper.jsx";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

const store = createStore(reducer);

const components = { wrapper: MDXWrapper };

export const Root = ({ children }) =>
<React.StrictMode>
    <Provider store={store}>
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    </Provider>
</React.StrictMode>;

export default Root;
