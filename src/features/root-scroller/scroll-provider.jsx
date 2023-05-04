import { useCallback, useState } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

export const ScrollProvider = ({children}) => {
    const [scroll, set] = useState([0, 0]);

    const setScroll = useCallback((x, y) => set([x, y]), []);
    return <Provider value={{ scroll, setScroll }}>{children}</Provider>;
};
