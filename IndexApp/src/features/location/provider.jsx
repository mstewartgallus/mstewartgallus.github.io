import { useDeferredValue } from "react";
import { usePrevious } from "@features/util";
import { Context } from "./context.js";

const { Provider } = Context;

export const LocationProvider = ({children, location}) => {
    const deferred = useDeferredValue(location);
    const prevLocation = usePrevious(deferred);
    return <Provider value={{location: deferred, prevLocation}}>
               {children}
           </Provider>;
};
