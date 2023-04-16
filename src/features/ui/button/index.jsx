import { forwardRef } from "react";
import { button } from "./button.module.css";

const Button = ({children, ...props}, ref) => {
    const clss = [button, props.className ?? ''].join(' ');
    return <button {...props} ref={ref} className={clss}>
               {children}
           </button>;
};

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
