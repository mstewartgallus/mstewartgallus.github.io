import { forwardRef, useMemo } from "react";
import { button } from "./button.module.css";

const Button = ({children, className = '', ...props}, ref) => {
    const clss = useMemo(() => [button, className].join(' '), [className]);
    return <button {...props} ref={ref} className={clss}>
               {children}
           </button>;
};

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
