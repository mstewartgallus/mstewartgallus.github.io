import { forwardRef, createContext, useContext } from "react";
import {
    orderedList, unorderedList,
    item,
    marker,
    content
} from "./list.module.css";

const Context = createContext(null);

const Ol = (props, ref) =>
<ol role="list" className={orderedList} {...props} ref={ref}>
    <Context.Provider value={props.reversed ? 'rol' : 'ol'}>
        {props.children}
    </Context.Provider>
</ol>;

const Ul = (props, ref) =>
<ul role="list" className={unorderedList} {...props} ref={ref}>
    <Context.Provider value='ul'>
        {props.children}
    </Context.Provider>
</ul>;

const Menu = (props, ref) =>
<menu role="list" className={unorderedList} {...props} ref={ref}>
    <Context.Provider value='ul'>
        {props.children}
    </Context.Provider>
</menu>;

const Li = (props, ref) => {
    const type = useContext(Context);
    return <li role="listitem" className={item} {...props} ref={ref}>
               <div role="presentation" className={marker} />
               <div className={content}>
                   {props.children}
               </div>
           </li>;
};

const OlRef = forwardRef(Ol);
const UlRef = forwardRef(Ul);
const MenuRef = forwardRef(Menu);
const LiRef = forwardRef(Li);

export { LiRef as Li, MenuRef as Menu, UlRef as Ul, OlRef as Ol };
