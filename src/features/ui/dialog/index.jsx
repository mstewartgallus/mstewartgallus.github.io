import { forwardRef, useImperativeHandle, useCallback, useState, useTransition, useEffect, useRef } from "react";
import {
    wrapper, dialog, inner,
    open as openClass, close as closeClass,
    closeSteady as closeSteadyClass,
    preview as previewClass
} from "./dialog.module.css";

const useDialog = open => {
    const [, startTransition] = useTransition();
    const [prevOpen, setPrevOpen] = useState(open);
    const endTransition = useCallback(() => {
        startTransition(() => setPrevOpen(open));
    }, [open]);
    const isTransitioning = prevOpen !== open;
    return { isTransitioning, endTransition };
};

export const Dialog = forwardRef(({ open, preview, ...props}, ref) => {
    let { className } = props;

    const myref = useRef();
    useImperativeHandle(ref, () => myref.current, []);

    useEffect(() => {
        const { current } = myref;
        if (open) {
            if (!current.open) {
                current.show();
            }
        } else {
            if (current.open) {
                current.close();
            }
        }
    }, [open]);

    const visible = open || preview;
    const { isTransitioning, endTransition } = useDialog(visible);

    const steadyClose = !visible && !isTransitioning;

    const wrapperClass = [
        wrapper,
        steadyClose ? closeSteadyClass : ''
    ].join(' ');

    className = [
        className,
        inner,
        open ? openClass : '',
        !visible ? closeClass : '',
        !open && preview ? previewClass : ''
    ].join(' ');

    const { children } = props;
    return <div className={wrapperClass}>
               <dialog {...props} className={dialog} ref={myref}>
                   <div aria-hidden={visible ? null : "true"}
                        onTransitionEnd={endTransition}
                        className={className}>
                       {children}
                   </div>
               </dialog>
           </div>;
});
Dialog.displayName = `Dialog`;
