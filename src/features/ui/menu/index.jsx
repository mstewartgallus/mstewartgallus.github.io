import {
    Children, forwardRef, createContext, useContext, useCallback,
    useEffect, useReducer, useRef,
    useTransition
} from "react";
import { A, useChanged } from "@features/util";
import { link, menubar, item } from "./list.module.css";

const reducer = length => (selection, action) => {
    const { type } = action;
    switch (type) {
    case 'left':
        if (selection === 0) {
            return length - 1;
        }
        return selection - 1;

    case 'right':
        if (selection >= length - 1) {
            return 0;
        }
        return selection + 1;

    case 'home':
        return 0;

    case 'end':
        return length - 1;

    case 'select':
        return action.index;

    default:
        return selection;
    }
};

export const useMenubar = length => {
    const [,startTransition] = useTransition();
    const [selection, dispatch] = useReducer(reducer(length), 0);
    const changed = useChanged(selection);
    const left = useCallback(() => startTransition(() => dispatch({ type: 'left'})), []);
    const right = useCallback(() => startTransition(() => dispatch({ type: 'right'})), []);
    const home = useCallback(() => startTransition(() => dispatch({ type: 'home' })), []);
    const end = useCallback(() => startTransition(() => dispatch({ type: 'end' })), []);
    const select = useCallback(index => startTransition(() => dispatch({ type: 'select', index })), []);
    return { changed, selection, left, right, home, end, select };
};


const Context = createContext(null);
Context.displayName = 'Menubar';

const { Provider } = Context;

const Item = createContext(-1);
Item.displayName = 'MenuItem';
const { Provider: ItemProvider } = Item;

// Not actually totally sure I want the menu roles/behaviour
const Menubar = (props, ref) => {
    const { children } = props;
    const childs = Children.toArray(children);
    const { length } = childs;
    const {
        changed, selection,
        home, end, left, right, select
    } = useMenubar(length);

    const onKeyDown = useCallback(e => {
        const { key, altKey, ctrlKey, metaKey, shiftKey } = e;
        if (altKey || ctrlKey || metaKey || shiftKey) {
            return;
        }

        switch (key) {
        case 'Home':
            e.preventDefault();
            home();
            break;
        case 'End':
            e.preventDefault();
            end();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            left();
            break;

        case 'ArrowRight':
            e.preventDefault();
            right();
            break;
        }
    }, [left, right, home, end]);
    return <ul onKeyDown={onKeyDown} role="menubar" className={menubar} {...props} ref={ref}>
               <Provider value={{changed, selection, select }}>
                   {
                       childs.map((child, ix) =>
                           <ItemProvider value={ix}>{child}</ItemProvider>
                       )
                   }
               </Provider>
           </ul>;
};

const MenuA = (props, ref) => {
    const theRef = useRef();
    const { selection, changed, select } = useContext(Context);
    const num = useContext(Item);
    const refs = useCallback(elem => {
        theRef.current = elem;
        if (ref) {
            ref.current = elem;
        }
    }, [ref]);

    const selected = selection === num;
    useEffect(() => {
        if (!selected || !changed) {
            return;
        }
        const { current } = theRef;
        current.scrollIntoView({ inline: 'center', block: 'center' });
        current.focus({ preventScroll: true, focusVisible: true });
    }, [changed, selected]);

    const onFocus = useCallback(e => {
        select(num);
    }, [select, num]);

    const { children } = props;
    return <li role="presentation" className={item}>
               <A role="menuitem" className={link} tabIndex={selected ? null : "-1"} onFocus={onFocus} {...props} ref={refs}>
                   {children}
               </A>
           </li>;
};


const MenubarRef = forwardRef(Menubar);
const MenuARef = forwardRef(MenuA);

export { MenubarRef as Menubar, MenuARef as MenuA };
