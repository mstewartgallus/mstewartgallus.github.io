import { createContext, useContext } from "react";
import {
    orderedList, unorderedList,
    uitem, oitem, roitem,
    content
} from "./list.module.css";

const Context = createContext(null);

export const Ol = ({children, reversed, ...props}) => {
    return <ol role="list" className={orderedList} reversed={reversed} {...props}>
               <Context.Provider value={reversed ? 'rol' : 'ol'}>
                   {children}
               </Context.Provider>
           </ol>;
};

export const Ul = ({children, ...props}) =>
<ul role="list" className={unorderedList} {...props}>
    <Context.Provider value='ul'>
        {children}
    </Context.Provider>
</ul>;

export const Menu = ({children, ...props}) =>
<menu role="list" className={unorderedList} {...props}>
    <Context.Provider value='ul'>
        {children}
    </Context.Provider>
</menu>;

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
