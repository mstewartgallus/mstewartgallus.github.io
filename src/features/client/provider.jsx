import { useEffect, useReducer, useTransition } from "react";
import { Context } from "./context.js";

const reducer = () => true;

const { Provider } = Context;

export const ClientProvider = ({children}) => {
    const [,startTransition] = useTransition();
    const [client, dispatch] = useReducer(reducer, false);
    useEffect(() => {
        startTransition(() => dispatch());
    }, []);
    return <Provider value={client}>
               {children}
           </Provider>;
};
