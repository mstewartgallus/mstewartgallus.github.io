import {
    Suspense,
    createContext, useContext,
    useEffect, useReducer, useTransition
} from "react";

const Context = createContext(false);
Context.displayName = 'Client';

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

const ClientCheck = ({children, fallback}) =>{
    const client = useClient();
    return client ? children : fallback ;
};

export const useClient = () => useContext(Context);

export const Client = ({children, fallback}) =>
<ClientCheck fallback={fallback}>
    <Suspense fallback={fallback}>
        {children}
    </Suspense>
</ClientCheck>;
