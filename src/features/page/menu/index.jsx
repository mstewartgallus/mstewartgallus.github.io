import {
    forwardRef,
    useState,
    useRef, useCallback, useId, useTransition
} from "react";
import { A, Pane } from "@features/ui";
import {
    menubutton,
    menulink,
    menulist,
    menuitem,
    outline as outlineClass
} from "./outline.module.css";


// We could use a menu or menubar role. However, we would need to
// support a number of menu commands and "menu" is really more of a
// desktop sort of menu.
export const Menu = forwardRef(function Menu({
    id,
    children,
    label
}, ref) {
    const buttonRef = useRef();
    ref ??= buttonRef;

    const [, startTransition] = useTransition();
    const [open, setOpen] = useState(false);

    const onKeyDown = useCallback(e => {
        switch (e.key) {
        case 'Escape':
            e.preventDefault();
            startTransition(() => setOpen(false));
            ref.current.focus({preventScroll: true, focusVisible: true});
            break;

        default:
            return;
        }
    }, [ref]);

    const onBlur = useCallback(e => {
        const { relatedTarget, currentTarget } = e;
        if (currentTarget.contains(relatedTarget)) {
            return;
        }
        startTransition(() => setOpen(false));
    }, []);

    const listRef = useRef();

    const onClick = useCallback(e => {
        startTransition(() => setOpen(o => !o));
    }, []);

    const menuId = useId();
    return <div className={outlineClass}
                onBlur={open ? onBlur : null}
                onKeyDown={open ? onKeyDown : null}
           >
               <button
                   ref={ref}
                   className={menubutton}
                   id={id}
                   onClick={onClick}
                   aria-controls={menuId}
                   aria-expanded={String(open)}
               >
                   {label}
               </button>
               <Pane open={open}>
                   <nav id={menuId} aria-labelledby={id}>
                       <menu className={menulist} ref={listRef}>
                           {children}
                       </menu>
                   </nav>
               </Pane>
           </div>;
});

export const MenuA = props => {
    return <li className={menuitem}>
               <A className={menulink}
                  {...props} />
           </li>;
};
