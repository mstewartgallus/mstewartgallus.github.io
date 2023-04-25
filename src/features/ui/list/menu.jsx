import { forwardRef } from "react";
import { unorderedList } from "./list.module.css";

const Menu = (props, ref) =>
<menu role="list" className={unorderedList} {...props} ref={ref} />;

const MenuRef = forwardRef(Menu);

export { MenuRef as Menu };
