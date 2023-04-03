import { useEffect, useRef } from "react";
import { useFocus } from "../../../features/util";
import { A } from "../../../features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

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

export const SkipA = ({children, ...props}) => {
    const ref = useRef();
    useFocusRef(ref);
    // Fix space hack
    return <div className={wrapper}>
               <div className={skipLink}>
                   <A ref={ref} {...props}>{children}</A>
               </div>
               &emsp;
           </div>;
};
