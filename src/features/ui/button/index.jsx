import { forwardRef } from "react";
import { button } from "./button.module.css";

const Button = (props, ref) => {
    const clss = [button, props.className ?? ''].join(' ');
    return <button {...props} ref={ref} className={clss} />;
};

const ButtonRef = forwardRef(Button);

export { ButtonRef as Button, ButtonRef as default };
