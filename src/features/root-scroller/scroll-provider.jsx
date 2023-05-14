import { useCallback, useState, useTransition } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

export const ScrollProvider = ({children}) => {
    const [, startTransition] = useTransition();
    const [scroll, set] = useState(null);
    const setScroll = useCallback((left, top) => startTransition(() => set({top, left})), []);
    return <Provider value={{ scroll, setScroll }}>
               {children}
           </Provider>;
};
