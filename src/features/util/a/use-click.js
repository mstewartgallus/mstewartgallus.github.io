import { useCallback } from "react";
import { navigate } from "gatsby";

export const useClick = ({ href, onClick }) => {
    const onClickWrap = useCallback(async e => {
        onClick?.(e);

        const { defaultPrevented, altKey, metaKey, shiftKey, ctrlKey, button } = e;
        if (defaultPrevented) {
            return;
        }
        if (button !== 0) {
            return;
        }

        if (altKey || metaKey || shiftKey || ctrlKey) {
            return;
        }

        e.preventDefault();
        await navigate(href);
    }, [onClick, href]);
    return { onClick: onClickWrap };
};
