import { createContext, useContext } from "react";

const Context = createContext();
Context.displayName = 'Focus';

export const FocusProvider = ({children, value}) =>
<Context.Provider value={value}>{children}</Context.Provider>;

export const useFocus = () => useContext(Context);
