import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createStore } from "../../state/store.js";

const Root = ({ children, store }) =>
<StrictMode>
    <Provider store={store}>
        {children}
    </Provider>
</StrictMode>;

export const wrapRootElement = ({element}) => {
    const store = createStore();
    return <Root store={store}>{element}</Root>;
};
