import { useCallback, useId, useState, useTransition, } from "react";
import { PushButton } from "@features/ui";
import { header, summary, outline as outlineClass } from "./outline.module.css";

export const Outline = ({children, content}) => {
    const [open, setOpen] = useState(false);
    const [, startTransition] = useTransition();

    const onClick = useCallback(e => {
        e.preventDefault();
        startTransition(() => setOpen(o => !o));
    }, []);

    const onKeyDown = useCallback(e => {
        if (e.key !== 'Escape') {
            return;
        }
        e.preventDefault();
        startTransition(() => setOpen(false));
    }, []);
    const onBlur = useCallback(e => {
        const { relatedTarget, currentTarget } = e;
        if (currentTarget.contains(relatedTarget)) {
            return;
        }
        startTransition(() => setOpen(false));
    }, []);

    const id = useId();
    const buttonId = `${id}-button`;
    const navId = `${id}-nav`;
    // FIXME autoclose on blur
    return  <div className={outlineClass}
                 onBlur={onBlur}
                 onKeyDown={onKeyDown}
            >
                <div className={header}>
                    {content}
                    <div className={summary}>
                        <PushButton
                            id={buttonId}
                            onClick={onClick}
                            open={open}
                            aria-controls={navId}
                        >
                            Outline
                        </PushButton>
                    </div>
                </div>
                <nav id={navId} hidden={open ? null : "hidden"} aria-labelledby={buttonId}>
                    {children}
                </nav>
            </div>;
};
