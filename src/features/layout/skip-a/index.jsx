import { A } from "../../../features/ui";
import { useFocus } from "../listeners.jsx";
import { skipLink } from "./skip-a.module.css";

export const SkipA = ({children, className = '', ...props}) => {
    const focus = useFocus();
    return <A className={`${skipLink} ${className}`} ref={focus} {...props}>{children}</A>;
};
