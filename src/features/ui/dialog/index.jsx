import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { useClient } from "@features/util";
import { wrapper, dialog, open as openClass, close as closeClass,
         preview as previewClass } from "./dialog.module.css";

const Dialog = ({ open, preview, ...props}, ref) => {

    let { className } = props;
    const myref = useRef();
    useImperativeHandle(ref, () => myref.current, []);

    const anyOpen = open || preview;
    useEffect(() => {
        const { current } = myref;
        if (anyOpen) {
            current.show();
        } else {
            current.open = false;
        }
        return () => {
            if (current.open) {
                current.open = false;
            }
        };
    }, [anyOpen]);
    className = [
        className,
        dialog,
        open ? openClass : closeClass,
        preview ? previewClass : ''
    ].join(' ');
    const client = useClient();
    return <div className={wrapper}>
               <dialog {...props}
                       aria-hidden={(client || open || preview) ? null : "true"}
                       open={client ? "open" : null}
                       className={className}
                       ref={myref}
               />
           </div>;
};

const DialogRef = forwardRef(Dialog);

export { DialogRef as Dialog };
