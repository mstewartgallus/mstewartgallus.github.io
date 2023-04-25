import { createContext, useContext, useMemo } from "react";

export const Context = createContext();
Context.displayName = 'Location';

const { Provider } = Context;

export const LocationProvider = ({children, location, prevLocation}) => {
    const value = useMemo(() => ({location, prevLocation}), [location, prevLocation]);
    return <Provider value={value}>{children}</Provider>;
};

export const useLocationContext = () => useContext(Context);

export const useLocation = () => useLocationContext().location;
export const usePrevLocation = () => useLocationContext().prevLocation;
