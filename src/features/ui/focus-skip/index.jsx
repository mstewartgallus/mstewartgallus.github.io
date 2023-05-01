import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Client, Assistive } from "@features/util";
import { Theme } from "../theme";
import { dialog } from "./dialog.module.css";

const Trailer = ({children}) =>
<Client fallback={children}>
    {
        createPortal(children, document.body)
    }
</Client>;

export const FocusSkip = ({id, children}) => {
    const content = useRef(null);
    const top = useRef(null);

    const toContent = useCallback(() =>
        content.current.focus({ focusVisible: true }), []);

    const toTop = useCallback(() =>
        top.current.focus({ focusVisible: true }), []);

    const autoClick = useCallback(e => e.target.click(), []);

    const onKeyDownButton = useCallback(e => {
        const { target, key } = e;
        switch (key) {
        case 'ArrowRight':
            target.click();
            break;
        default:
            return;
        }
        e.preventDefault();
    }, []);

    const onKeyDownContent = useCallback(e => {
        const { key } = e;
        switch (key) {
        case 'Escape':
            top.current.focus({ focusVisible: true });
            break;
        default:
            return;
        }
        e.preventDefault();
    }, []);
    return <div>
               <div>
                   <button id={id}
                           onClick={toContent}
                           onKeyDown={onKeyDownButton}
                           ref={top}>
                       Content
                   </button>
               </div>

               <Trailer>
                   <dialog open="open" className={dialog}>
                       <Theme>
                           <Assistive>
                               <button onFocus={autoClick} onClick={toTop}>
                                   To Top
                               </button>
                           </Assistive>

                           <div onKeyDown={onKeyDownContent}>
                               <div tabIndex="-1" ref={content}>Content</div>

                               {children}
                           </div>
                           <Assistive>
                               <button onFocus={autoClick} onClick={toTop}>
                                   To Top
                               </button>
                           </Assistive>
                       </Theme>
                   </dialog>
               </Trailer>
           </div>;
};
