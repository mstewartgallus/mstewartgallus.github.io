import { useCallback, useState, useTransition } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

export const ScrollProvider = ({children}) => {
    const [, startTransition] = useTransition();
    const [scroll, set] = useState([0, 0]);

    const setScroll = useCallback((x, y) =>
        startTransition(() => set([x, y])), []);
    return <Provider value={{ scroll, setScroll }}>{children}</Provider>;
};
