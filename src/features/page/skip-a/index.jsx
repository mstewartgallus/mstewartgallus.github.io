import { useCallback, useTransition, useState, useImperativeHandle } from "react";
import { focusRef } from "@features/focus";
import { A, PopOver } from "@features/ui";
import { skipLink } from "./skip-a.module.css";

const autoFocus = elem => {
    if (!elem) {
        return;
    }
    elem.focus({preventScroll: true, focusVisible: true });
};

export const SkipA = props => {
    const [lifted, setLifted] = useState(false);

    const [,startTransition] = useTransition();
    // Fix space hack
    useImperativeHandle(focusRef, () => ({
        focus() {
            startTransition(() => setLifted(true));
        }
    }), []);

    const onBlur = useCallback(() => {
        startTransition(() => setLifted(false));
    }, []);
    const onKeyDown = useCallback(e => {
        if (e.key !== "Escape") {
            return;
        }
        e.preventDefault();
        startTransition(() => setLifted(false));
    }, []);

    return lifted ?
        <>
            <PopOver>
                <A onBlur={onBlur}
                   onKeyDown={onKeyDown}
                   ref={autoFocus}
                   className={skipLink}
                   {...props} />
            </PopOver>
            <span aria-hidden="true">&emsp;</span>
        </> : <A {...props} />;
};
