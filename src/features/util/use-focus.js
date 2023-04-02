import { useUnder } from "./use-under.jsx";
import { usePrevLocation } from "./use-prev-location.jsx";

export const useFocus = () => {
    const under = useUnder();
    const fresh = !usePrevLocation();
    const focusable = !fresh && !under;
    return focusable;
};
