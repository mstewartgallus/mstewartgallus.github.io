import {
    forwardRef, createContext, useContext, useCallback, useState,
    useImperativeHandle,
    useRef
} from "react";
import { Button } from "../button";
import { PopOver, PopOverSummary, usePopOverOpen } from "../pop-over";
import {
    menu as menuClass
} from "./list.module.css";

const Context = createContext(true);
Context.displayName = 'Open';

const { Provider } = Context;

export const MegaMenuSummary = forwardRef((props, ref) => {
    const { children } = props;
    const { onClick } = useContext(Context);
    return <PopOverSummary {...props} onClick={onClick}>{children}</PopOverSummary>;
});
MegaMenuSummary.displayName = `MegaMenuSummary`;

const CloseButton = props => {
    const open = usePopOverOpen();
    return <form method="dialog">
               <Button
                   type="submit"
                   tabIndex={open ? "0" : "-1"} {...props} />
           </form>;
};

export const MegaMenu = forwardRef(({ children, summary, ...props}, ref) => {
    const popoverRef = useRef();
    useImperativeHandle(ref, () => popoverRef.current, []);

    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    const onClick = useCallback(() => {
        setOpen(o => !o);
    }, []);

    const onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const onBlur = useCallback(e => {
        const { relatedTarget } = e;
        const { current } = popoverRef;
        const contains = current.contains(relatedTarget);
        if (contains) {
            return;
        }
        setFocus(false);
        setOpen(false);
    }, []);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    const onFocusWithin = useCallback(() => {
        setOpen(true);
    }, []);
    const onClickWithin = useCallback(() => {
        setOpen(true);
    }, []);

    const onCancel = useCallback(e => {
        e.preventDefault();
        setOpen(false);
    }, []);

    const onKeyDown = useCallback(e => {
        const { key, altKey, ctrlKey, metaKey, shiftKey } = e;

        if (altKey || ctrlKey || metaKey || shiftKey) {
            return;
        }

        switch (key) {
        case 'ArrowRight':
            setOpen(true);
            break;
        case 'Escape':
            setOpen(false);
            break;
        default:
            return;
        }

        e.preventDefault();
    }, []);

    const preview = hover || focus;

    return <PopOver
               ref={popoverRef}
               onFocus={onFocus}
               onBlur={onBlur}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               onKeyDown={onKeyDown}
               onCancel={onCancel}
               open={open}
               preview={preview}
               summary={
                   <Provider value={{ open, onClick }}>
                       {summary}
                   </Provider>
               }>
               <div className={menuClass}
                    onClick={onClickWithin}
                    onFocus={onFocusWithin}>
                   <CloseButton>Escape</CloseButton>
                   {children}
               </div>
           </PopOver>;
});
MegaMenu.displayName = `MegaMenu`;
