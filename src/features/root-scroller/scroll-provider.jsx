import { useCallback, useState } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

export const ScrollProvider = ({children}) => {
    const [scroll, set] = useState(null);

    const setScroll = useCallback((left, top) => set({top, left}), []);
    return <Provider value={{ scroll, setScroll }}>{children}</Provider>;
};
