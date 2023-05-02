import { useState } from "react";
import { Context } from "./context.js";

const { Provider } = Context;

export const ScrollProvider = ({children}) => {
    const [scroll, setScroll] = useState([0, 0]);

    return <Provider value={{ scroll, setScroll }}>{children}</Provider>;
};
