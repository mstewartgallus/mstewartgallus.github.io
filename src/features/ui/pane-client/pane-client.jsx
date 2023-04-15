import { useDeferredValue } from "react";
import {
    disclosure,
    wrapper, wrapperInert,
    content, contentHidden
} from "./panel.module.css";

export const PaneClient = ({children, open, ...props}) => {
    const deferredOpen = useDeferredValue(open);

    const wrapperClass = [wrapper, deferredOpen ? '' : wrapperInert].join(' ');
    const contentClass = [content, deferredOpen ? '' : contentHidden].join(' ');
    return <div className={disclosure} {...props}>
               <div className={wrapperClass}>
                   <div className={contentClass} inert={open ? null : "inert"}>
                       {children}
                   </div>
               </div>
           </div>;
};

export default PaneClient;
