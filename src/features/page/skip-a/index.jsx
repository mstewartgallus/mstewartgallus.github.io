import { useRef } from "react";
import { useFocus, useUnder } from "../../../features/util";
import { A } from "../../../features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

export const SkipA = ({children, ...props}) => {
    const ref = useRef();
    const under = useUnder();
    useFocus(under ? null : ref);
    // Fix space hack
    return <div className={wrapper}>
               <A ref={ref} className={skipLink} {...props}>{children}</A>
               <span aria-hidden="true">&emsp;</span>
           </div>;
};
