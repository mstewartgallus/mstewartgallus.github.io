import { open as openClass, close as closeClass } from "./icon.module.css";

export const Icon = ({children, open}) =>
<span className={open ? openClass : closeClass}>{children}</span>;
