import {
    forwardRef, createContext, useContext, useCallback, useState,
    useImperativeHandle,
    useId,
    useRef
} from "react";
import { A } from "../a";
import { Menu, Li } from "../list";
import { ClickTrap } from "../click-trap";
import { PopOver, PopOverSummary } from "../pop-over";
import {
    menu as menuClass
} from "./list.module.css";

const Context = createContext(true);
Context.displayName = 'Open';

const { Provider } = Context;

// Not "that kind of menu"
// More like a miny carousel if anything ?
const Menubar = ({ children, heading, ...props}, ref) => {
    const myref = useRef();
    useImperativeHandle(ref, () => myref.current, []);

    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    const onClick = useCallback(() => {
        setOpen(o => !o);
    }, []);

    const onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const popoverRef = useRef();
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

    const id = useId();
    return <PopOver
               ref={popoverRef}
               onFocus={onFocus}
               onBlur={onBlur}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               onKeyDown={onKeyDown}
               open={open}
               preview={preview}
               summary={
                   <PopOverSummary
                       id={id}
                       onClick={onClick}>
                       {heading}
                   </PopOverSummary>
               }>
               <div className={menuClass}
                    onFocus={onFocusWithin}
                    onClick={onClickWithin}>
                   <Menu>
                       <Provider value={open}>
                           {children}
                       </Provider>
                   </Menu>
               </div>
           </PopOver>;
};


const MenuA = (props, ref) => {
    const open = useContext(Context);
    return <Li>
               <A {...props} tabIndex={open ? null : "-1"}>
                   {props.children}
                   <ClickTrap />
               </A>
           </Li>;
};

const MenuARef = forwardRef(MenuA);
const MenubarRef = forwardRef(Menubar);

export { MenubarRef as Menubar, MenuARef as MenuA };
