import { createContext, useContext,
         useEffect, useReducer, useTransition } from "react";

const Context = createContext(false);
Context.displayName = 'Client';

const useClient = () => useContext(Context);

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

// FIXME use suspense?
export const Client = ({children, fallback}) =>{
    const client = useClient();
    return client ? children : fallback ;
};
