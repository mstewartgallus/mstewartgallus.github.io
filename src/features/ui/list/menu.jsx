import { forwardRef } from "react";
import { ul } from "./ul.module.css";

export const Menu = forwardRef((props, ref) =>
    <menu role="list" className={ul} {...props} ref={ref} />);
Menu.displayName = `Menu`;
