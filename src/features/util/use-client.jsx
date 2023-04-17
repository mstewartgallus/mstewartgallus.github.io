import { createContext, useContext,
         useEffect, useState, useTransition } from "react";

const Context = createContext(false);
Context.displayName = 'Client';

const useClient = () => useContext(Context);

export const ClientProvider = ({children}) => {
    const [,startTransition] = useTransition();
    const [client, setClient] = useState(false);
    useEffect(() => {
        startTransition(() => setClient(true));
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
