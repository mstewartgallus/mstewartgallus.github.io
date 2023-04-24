import { useDeferredValue } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import { useChanged } from "@features/util";
import { Context } from "./context.js";

const { Provider } = Context;

const useFocusState = () => {
    const location = useLocation();
    const deferred = useDeferredValue(location);
    const { pathname, hash } = deferred;
    const changed = useChanged(pathname);
    return { hash, pathname, changed };
};

export const FocusProvider = ({children}) => {
    const state = useFocusState();
    return <Provider value={state}>{children}</Provider>;
};
