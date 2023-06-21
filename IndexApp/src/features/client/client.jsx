import { Suspense, useContext } from "react";
import { Context } from "./context.js";

export const useClient = () => useContext(Context);

const ClientCheck = ({children, fallback}) =>{
    const client = useClient();
    return client ? children : fallback ;
};

export const Client = ({children, fallback}) =>
<ClientCheck fallback={fallback}>
    <Suspense fallback={fallback}>
        {children}
    </Suspense>
</ClientCheck>;
