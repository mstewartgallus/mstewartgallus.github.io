import { forwardRef } from "react";
import { input } from "./input.module.css";

const Input = ({children, ...props}, ref) =>
<input className={input} {...props} ref={ref}>
    {children}
</input>;

const InputRef = forwardRef(Input);

export { InputRef as Input, InputRef as default };
