import { forwardRef, createContext, useContext } from "react";
import {
    orderedList, unorderedList,
    uitem, oitem, roitem,
    content
} from "./list.module.css";

const Context = createContext(null);

const Ol = ({children, ...props}, ref) =>
<ol role="list" className={orderedList} {...props} ref={ref}>
    <Context.Provider value={props.reversed ? 'rol' : 'ol'}>
        {children}
    </Context.Provider>
</ol>;

const Ul = ({children, ...props}, ref) =>
<ul role="list" className={unorderedList} {...props} ref={ref}>
    <Context.Provider value='ul'>
        {children}
    </Context.Provider>
</ul>;

const Menu = ({children, ...props}, ref) =>
<menu role="list" className={unorderedList} {...props} ref={ref}>
    <Context.Provider value='ul'>
        {children}
    </Context.Provider>
</menu>;

const Li = ({children, ...props}, ref) => {
    const type = useContext(Context);
    const item = {
        'ul': uitem,
        'ol': oitem,
        'rol': roitem
    }[type];
    return <li role="listitem" className={item} {...props} ref={ref}>
        <div className={content}>{children}</div>
    </li>;
};

const OlRef = forwardRef(Ol);
const UlRef = forwardRef(Ul);
const MenuRef = forwardRef(Menu);
const LiRef = forwardRef(Li);

export { LiRef as Li, MenuRef as Menu, UlRef as Ul, OlRef as Ol };
