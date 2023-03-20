import { orderedList, unorderedList, menuList, item } from "./list.module.css";

export const Ol = ({children, ...props}) =>
<ol className={orderedList} {...props}>{children}</ol>;

export const Ul = ({children, ...props}) =>
<ul className={unorderedList} {...props}>{children}</ul>;

export const Menu = ({children, ...props}) =>
<menu className={menuList} {...props}>{children}</menu>;

export const Li = ({children, ...props}) =>
<li className={item} {...props} >{children}</li>;
