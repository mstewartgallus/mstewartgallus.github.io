import { useDeferredValue } from "react";
import {
    disclosure,
    wrapper, wrapperInert,
    content, contentHidden, contentWillChange
} from "./panel.module.css";

export const PaneClient = ({children, willChange, open, ...props}) => {
    const deferredWillChange = useDeferredValue(willChange);
    const deferredOpen = useDeferredValue(open);

    const wrapperClass = [wrapper, deferredOpen ? '' : wrapperInert].join(' ');
    const contentClass = [
        content,
        deferredWillChange ? contentWillChange : '',
        deferredOpen ? '' : contentHidden
    ].join(' ');
    return <div className={disclosure} {...props}>
               <div className={wrapperClass}>
                   <div className={contentClass} inert={open ? null : "inert"}>
                       {children}
                   </div>
               </div>
           </div>;
};

export default PaneClient;
