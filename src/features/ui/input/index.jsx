import { forwardRef } from "react";
import { input } from "./input.module.css";

const Input = (props, ref) => <input className={input} {...props} ref={ref} />;

const InputRef = forwardRef(Input);

export { InputRef as Input, InputRef as default };
