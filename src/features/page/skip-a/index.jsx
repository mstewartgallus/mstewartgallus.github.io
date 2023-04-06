import { focusRef } from "../../../features/focus";
import { useUnder } from "../../../features/util";
import { A } from "../../../features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

export const SkipA = ({children, ...props}) => {
    const under = useUnder();
    // Fix space hack
    return <div className={wrapper}>
               <A ref={under ? null : focusRef} className={skipLink} {...props}>{children}</A>
               <span aria-hidden="true">&emsp;</span>
           </div>;
};
