import { forwardRef } from "react";
import { checkbox } from "./checkbox.module.css";

export const Checkbox = forwardRef((props, ref) =>
    <input className={checkbox} type="checkbox" {...props} ref={ref}/>);
Checkbox.displayName = `Checkbox`;
