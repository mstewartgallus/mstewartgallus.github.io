import { useEffect, useReducer, useTransition } from "react";
import { Context } from "./context.js";

const reducer = () => true;

export const ClientProvider = ({children}) => {
    const [,startTransition] = useTransition();
    const [client, dispatch] = useReducer(reducer, false);
    useEffect(() => {
        startTransition(() => dispatch());
    }, []);
    return <Context.Provider value={client}>
               {children}
           </Context.Provider>;
};
