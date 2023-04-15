import { forwardRef, createContext, useContext } from "react";
import {
    orderedList, unorderedList,
    uitem, oitem, roitem,
    content
} from "./list.module.css";

const Context = createContext(null);

export const Ol = forwardRef(function Ol({children, ...props}, ref) {
    return <ol role="list" className={orderedList} {...props} ref={ref}>
               <Context.Provider value={props.reversed ? 'rol' : 'ol'}>
                   {children}
               </Context.Provider>
           </ol>;
});

export const Ul = forwardRef(function Ul({children, ...props}, ref) {
    return <ul role="list" className={unorderedList} {...props} ref={ref}>
               <Context.Provider value='ul'>
                   {children}
               </Context.Provider>
           </ul>;
});

export const Menu = forwardRef(function Ul({children, ...props}, ref) {
    return <menu role="list" className={unorderedList} {...props} ref={ref}>
               <Context.Provider value='ul'>
                   {children}
               </Context.Provider>
           </menu>;
});

export const Li = ({children, ...props}) => {
    const type = useContext(Context);
    const item = {
        'ul': uitem,
        'ol': oitem,
        'rol': roitem
    }[type];
    return <li role="listitem" className={item} {...props}>
        <div className={content}>{children}</div>
    </li>;
};
