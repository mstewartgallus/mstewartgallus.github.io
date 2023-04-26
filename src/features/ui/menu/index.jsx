import { forwardRef } from "react";
import { A } from "../a";
import { menubar, item, hr } from "./list.module.css";

// Not actually totally sure I want the menu roles/behaviour
const Menubar = (props, ref) =>
<ul role="list" className={menubar} {...props} ref={ref} />;

const onFocus = e => {
    const { target } = e;
    target.scrollIntoView({ inline: 'center', block: 'nearest' });
};

const MenuA = (props, ref) =>
<li role="listitem" className={item}>
    <A onFocus={onFocus} {...props} ref={ref} />
</li>;


const MenubarRef = forwardRef(Menubar);
const MenuARef = forwardRef(MenuA);

export { MenubarRef as Menubar, MenuARef as MenuA };
