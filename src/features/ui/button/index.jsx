import { forwardRef } from "react";
import { button } from "./button.module.css";

const Button = ({children, className = '', ...props}, ref) =>
<button className={`${button} ${className}`} ref={ref} {...props}>
    {children}
</button>;

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
