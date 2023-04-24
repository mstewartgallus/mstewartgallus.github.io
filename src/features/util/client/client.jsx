import { Suspense, useContext } from "react";
import { Context } from "./context.js";

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
