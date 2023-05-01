import { forwardRef } from "react";
import { unorderedList } from "./list.module.css";

export const Menu = forwardRef((props, ref) =>
    <menu role="list" className={unorderedList} {...props} ref={ref} />);
Menu.displayName = `Menu`;
