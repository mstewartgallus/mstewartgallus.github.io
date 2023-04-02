import { createContext, useContext } from "react";

const Context = createContext();
Context.displayName = 'PrevLocation';

export const PrevLocationProvider = ({children, value}) =>
<Context.Provider value={value}>{children}</Context.Provider>;

export const usePrevLocation = () => useContext(Context);
