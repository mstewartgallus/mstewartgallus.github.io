import {
    Children, forwardRef, createContext, useContext,
    useMemo
} from "react";
import { A } from "@features/util";
import { FocusGroup, useFocusItem } from "./focus.jsx";
import { ClickTrap } from "../click-trap";
import { link, menubar, list, item } from "./list.module.css";

const Item = createContext(-1);
Item.displayName = 'MenuItem';
const { Provider: ItemProvider } = Item;

const MenuItems = ({children}) => children.map(item =>
    <ItemProvider key={item.key} value={item.key}>
        {item}
    </ItemProvider>
);

// Not "that kind of menu"
// More like a miny carousel if anything ?
export const Menubar = forwardRef((props, ref) => {
    const { children } = props;
    const childs = useMemo(() => Children.toArray(children), [children]);
    const keys = useMemo(() => childs.map(child => child.key), [childs]);

    return <FocusGroup {...props} className={menubar} keys={keys} ref={ref}>
               <menu className={list}>
                   <MenuItems>{childs}</MenuItems>
               </menu>
           </FocusGroup>;
});
Menubar.displayName = `Menubar`;

export const MenuA = forwardRef((props, ref) => {
    const key = useContext(Item);
    const menu = useFocusItem(ref, key);

    const { children } = props;

    return <li className={item}>
               <A className={link} {...props} {...menu}>
                   {children}
                   <ClickTrap />
               </A>
           </li>;
});
MenuA.displayName = `MenuA`;
