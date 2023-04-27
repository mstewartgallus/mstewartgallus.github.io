import {
    Children, forwardRef, createContext, useContext, useCallback,
    useMemo,
    useEffect, useReducer, useRef
} from "react";
import { A, useChanged } from "@features/util";
import { ClickTrap } from "../click-trap";
import { link, menubar, item } from "./list.module.css";

const reducer = keys => {
    const { length } = keys;
    return (selection, action) => {
        const { type } = action;
        let ix = keys.indexOf(selection);
        if (ix < 0) {
            ix = 0;
            selection = keys[0];
        }
        switch (type) {
        case 'left':
            if (ix === 0) {
                return keys[length - 1];
            }
            return keys[ix - 1];

        case 'right':
            if (ix >= length - 1) {
                return keys[0];
            }
            return keys[ix + 1];

        case 'home':
            return keys[0];

        case 'end':
            return keys[length - 1];

        case 'select':
            return action.key;

        default:
            return selection;
        }
    };
};

export const useMenubar = keys => {
    const r = useMemo(() => reducer(keys), [keys]);
    const [selection, dispatch] = useReducer(r, null, () => keys[0]);
    const changed = useChanged(selection);
    const left = useCallback(() => dispatch({ type: 'left'}), []);
    const right = useCallback(() => dispatch({ type: 'right'}), []);
    const home = useCallback(() => dispatch({ type: 'home' }), []);
    const end = useCallback(() => dispatch({ type: 'end' }), []);
    const select = useCallback(key => dispatch({ type: 'select', key }), []);
    return { changed, selection, left, right, home, end, select };
};


const Context = createContext(null);
Context.displayName = 'Menubar';

const { Provider } = Context;

const Item = createContext(-1);
Item.displayName = 'MenuItem';
const { Provider: ItemProvider } = Item;

// Not actually totally sure I want the menu roles/behaviour
const MenubarPrim = (props, ref) => {
    const { children, keys } = props;
    const {
        changed, selection,
        home, end, left, right, select
    } = useMenubar(keys);

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

        default:
            break;
        }
    }, [left, right, home, end]);

    return <ul onKeyDown={onKeyDown} role="menubar" className={menubar} {...props} ref={ref}>
               <Provider value={{changed, selection, select }}>
                   {children}
               </Provider>
           </ul>;
};

const MenubarPrimRef = forwardRef(MenubarPrim);

const MenuItems = ({children}) => children.map(item =>
    <ItemProvider key={item.key} value={item.key}>
        {item}
    </ItemProvider>);


const Menubar = (props, ref) => {
    const { children } = props;
    const childs = useMemo(() => Children.toArray(children), [children]);
    const keys = useMemo(() => childs.map(child => child.key), [childs]);

    return <MenubarPrimRef {...props} keys={keys} ref={ref}>
               <MenuItems>{childs}</MenuItems>
           </MenubarPrimRef>;
};

const MenuA = (props, ref) => {
    const { selection, changed, select } = useContext(Context);
    const key = useContext(Item);

    const selected = selection === key;

    const theRef = useRef(null);
    useEffect(() => {
        if (!selected || !changed) {
            return;
        }
        const { current } = theRef;
        current.focus({ preventScroll: true, focusVisible: true });
        current.scrollIntoView({ inline: 'center', block: 'center' });
    }, [changed, selected]);

    const onFocus = useCallback(e => {
        select(key);
    }, [select, key]);

    const refs = useCallback(e => {
        theRef.current = e;
        if (ref) {
            ref.current = e;
        }
    }, [ref]);

    const { children } = props;
    return <li role="presentation" className={item}>
               <A role="menuitem"
                  className={link}
                  tabIndex={selected ? null : "-1"}
                  onFocus={onFocus}
                  {...props}
                  ref={refs}>
                   {children}
                   <ClickTrap />
               </A>
           </li>;
};


const MenubarRef = forwardRef(Menubar);
const MenuARef = forwardRef(MenuA);

export { MenubarRef as Menubar, MenuARef as MenuA };
