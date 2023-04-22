import { createContext, useContext } from "react";
import { createPortal } from "react-dom";

const Context = createContext();
Context.displayName = 'Toast';

const { Provider } = Context;

export const ToastProvider = Provider;
export const Toast = ({children}) => {
    const output = useContext(Context);
    const { current } = output;
    if (!current) {
        return null;
    }
    return createPortal(children, current);
};
