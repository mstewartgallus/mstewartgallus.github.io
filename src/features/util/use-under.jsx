import { memo, useDeferredValue, createContext, useContext } from "react";

const Under = createContext(false);
Under.displayName = 'Under';

export const useUnder = () => useDeferredValue(useContext(Under));
export const UnderProvider = memo(Under.Provider);

export default useUnder;
