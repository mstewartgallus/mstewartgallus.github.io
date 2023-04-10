import { forwardRef } from "react";
import { useUnder } from "@features/util";
import { button } from "./button.module.css";

const Button = ({children, id, className = '', ...props}, ref) => {
    const under = useUnder();
    if (under) {
        id = null;
    }
    return <button id={id} className={`${button} ${className}`} ref={ref} {...props}>
               {children}
           </button>;
};

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
