import { createContext, useContext } from "react";

const Context = createContext(false);
Context.displayName = 'Under';

export const useUnder = () => useContext(Context);
export const UnderProvider = ({value, children}) =>
<Context.Provider value={!!value}>{children}</Context.Provider>;

export default useUnder;
