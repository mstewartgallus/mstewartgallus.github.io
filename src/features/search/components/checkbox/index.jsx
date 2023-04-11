import { forwardRef } from "react";
import { checkbox } from "./checkbox.module.css";

const Checkbox = (props, ref) =>
<input className={checkbox} type="checkbox" {...props} ref={ref}/>;

const CheckboxRef = forwardRef(Checkbox);

export { CheckboxRef as Checkbox, CheckboxRef as default };
