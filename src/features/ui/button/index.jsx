import { forwardRef } from "react";
import { button } from "./button.module.css";

const Button = ({children, ...props}, ref) =>
<button className={button} ref={ref} {...props}>
    {children}
</button>;

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
