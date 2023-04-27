import {
    Children, forwardRef, createContext, useContext, useCallback,
    useMemo, useImperativeHandle,
    useEffect, useReducer, useRef
} from "react";
import { A, useChanged } from "@features/util";
import { ClickTrap } from "../click-trap";
import { link, select as selectClass, menubar, list, item } from "./list.module.css";

const reducer = keys => {
    const { length } = keys;
    return (selection, action) => {
        const { type } = action;
        let ix = keys.indexOf(selection);
        if (ix < 0) {
            selection = null;
        }
        switch (type) {
        case 'left':
            if (ix < 0) {
                return keys[length - 1];
            }
            if (ix === 0) {
                return keys[length - 1];
            }
            return keys[ix - 1];

        case 'right':
            if (ix < 0) {
                return keys[0];
            }
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

        case 'blur':
            return null;

        default:
            return selection;
        }
    };
};

export const useMenubar = keys => {
    const r = useMemo(() => reducer(keys), [keys]);
    const [selection, dispatch] = useReducer(r, null);
    const changed = useChanged(selection);
    const left = useCallback(() => dispatch({ type: 'left'}), []);
    const right = useCallback(() => dispatch({ type: 'right'}), []);
    const home = useCallback(() => dispatch({ type: 'home' }), []);
    const end = useCallback(() => dispatch({ type: 'end' }), []);
    const select = useCallback(key => dispatch({ type: 'select', key }), []);
    const blur = useCallback(() => dispatch({ type: 'blur' }), []);
    return { changed, selection, left, right, home, end, select, blur };
};


const Context = createContext(null);
Context.displayName = 'Menubar';

const { Provider } = Context;

const Item = createContext(-1);
Item.displayName = 'MenuItem';
const { Provider: ItemProvider } = Item;

// Not "that kind of menu"
// More like a miny carousel if anything ?
const MenubarPrim = (props, ref) => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, []);

    const { children, keys } = props;
    const {
        changed, selection,
        home, end, left, right, select, blur
    } = useMenubar(keys);

    const onKeyDown = useCallback(e => {
        const { target, key, altKey, ctrlKey, metaKey, shiftKey } = e;

        const { current } = myref;
        if (target !== current) {
            return;
        }

        if (altKey || ctrlKey || metaKey || shiftKey) {
            return;
        }

        switch (key) {
        case 'Enter':
        case 'ArrowRight':
            right();
            break;

        case 'ArrowLeft':
            left();
            break;

        case 'Home':
            home();
            break;
        case 'End':
            end();
            break;
        default:
            return;
        }

        e.preventDefault();
    }, [left, right, home, end]);

    const onBlur = useCallback(e => {
        const { relatedTarget, currentTarget } = e;
        if (currentTarget.contains(relatedTarget)) {
            return;
        }
        blur();
    }, [blur]);

    const selected = null === selection;
    // Menubar or toolbar roles would be misleading here
    return <div
               role="group"
               className={menubar}
               onKeyDown={onKeyDown}
               onBlur={onBlur}
               tabIndex={selected ? "0" : "-1"}
               {...props} ref={myref}>
               <menu className={list}>
                   <Provider value={{changed, selection, select, home, end, left, right }}>
                       {children}
                   </Provider>
               </menu>
           </div>;
};

const MenubarPrimRef = forwardRef(MenubarPrim);

const useMenuItem = ref => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, []);

    const { selection, changed, home, end, left, right, select } = useContext(Context);
    const key = useContext(Item);

    const selected = selection === key;

    useEffect(() => {
        if (!selected || !changed) {
            return;
        }
        const { current } = myref;
        current.focus({ preventScroll: true, focusVisible: true });
        current.scrollIntoView({ inline: 'center', block: 'center' });
    }, [changed, selected]);

    const onKeyDown = useCallback(e => {
        const { key, altKey, ctrlKey, metaKey, shiftKey } = e;
        if (altKey || ctrlKey || metaKey || shiftKey) {
            return;
        }

        switch (key) {
        case 'Home':
            home();
            break;
        case 'End':
            end();
            break;
        case 'ArrowLeft':
            left();
            break;

        case 'ArrowRight':
            right();
            break;

        default:
            return;
        }

        e.preventDefault();
    }, [left, right, home, end]);

    const onFocus = useCallback(() => {
        if (selected) {
            return;
        }
        select(key);
    }, [select, key, selected]);

    return { tabIndex: selected ? "0" : "-1", onKeyDown, onFocus, ref: myref };
};


const MenuA = (props, ref) => {
    const menu = useMenuItem(ref);
    const { selection } = useContext(Context);
    const key = useContext(Item);

    const selected = selection === key;

    const { children } = props;

    const className = [item, selected ? selectClass : ''].join(' ');
    return <li className={className}>
               <A className={link} {...props} {...menu}>
                   {children}
                   <ClickTrap />
               </A>
           </li>;
};

const MenuItem = (props, ref) =>
<li className={item} {...props} ref={ref}/>;

const MenuARef = forwardRef(MenuA);
const MenuItemRef = forwardRef(MenuItem);

const MenuItems = ({children}) => children.map(item => {
    const { menuLabel } = item.props;
    if (menuLabel) {
        return item;
    }
    return <ItemProvider key={item.key} value={item.key}>
               {item}
           </ItemProvider>;
});


const Menubar = (props, ref) => {
    const { children } = props;
    const childs = useMemo(() => Children.toArray(children), [children]);
    const keys = useMemo(() => childs.flatMap(child => {
        if (child.props.menuLabel) {
            return [];
        }
        return [child.key];
    }), [childs]);

    return <MenubarPrimRef {...props} keys={keys} ref={ref}>
               <MenuItems>{childs}</MenuItems>
           </MenubarPrimRef>;
};

const MenubarRef = forwardRef(Menubar);

export { MenubarRef as Menubar, MenuARef as MenuA, MenuItemRef as MenuItem };
