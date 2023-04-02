import { useEffect, useRef } from "react";
import { useFocus } from "../../../features/util";
import { A } from "../../../features/ui";
import { skipLink } from "./skip-a.module.css";

const options = {
    preventScroll: true,
    focusVisible: true
};

const useFocusRef = ref => {
    const focus = useFocus();
    useEffect(() => {
        if (!focus) {
            return;
        }
        ref.current.focus(options);
    }, [focus, ref]);
};

export const SkipA = ({children, className = '', ...props}) => {
    const ref = useRef();
    useFocusRef(ref);
    return <A className={`${skipLink} ${className}`} ref={ref} {...props}>{children}</A>;
};
