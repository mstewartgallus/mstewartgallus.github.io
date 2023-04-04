import { useLocation } from "@reach/router";
import { useUnder } from "./use-under.jsx";
import { usePrevLocation } from "./use-prev-location.jsx";

export const useFocus = () => {
    const under = useUnder();
    const location = useLocation();
    const prevLocation = usePrevLocation();
    const focusable = !!prevLocation && !under && !location.hash;
    return focusable;
};
