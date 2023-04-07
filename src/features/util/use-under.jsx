import { memo, createContext, useContext } from "react";

const Under = createContext(false);
Under.displayName = 'Under';

export const useUnder = () => useContext(Under);
export const UnderProvider = memo(Under.Provider);

export default useUnder;
