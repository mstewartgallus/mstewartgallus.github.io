import { useCallback, useReducer, useTransition } from "react";

const accordion = (selection, action) => {
    selection = selection === action ? null : action;
    return selection;
};

export const useAccordion = () => {
    const [,startTransition] = useTransition();
    const [selected, dispatch] = useReducer(accordion, null);
    const click = useCallback(value =>
        startTransition(() => dispatch(value)), []);
    return [selected, click];
};
