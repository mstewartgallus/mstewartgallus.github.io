import { useDeferredValue } from "react";
import {
    disclosure,
    wrapper, wrapperHidden, wrapperWillChange,
    content, contentHidden, contentWillChange
} from "./panel.module.css";

export const PaneClient = ({children, willChange, open}) => {
    const deferredWillChange = useDeferredValue(willChange);
    const deferredOpen = useDeferredValue(open);

    const wrapperClass = [
        wrapper,
        deferredWillChange ? wrapperWillChange : '',
        deferredOpen ? '' : wrapperHidden
    ].join(' ');
    const contentClass = [
        content,
        deferredWillChange ? contentWillChange : '',
        deferredOpen ? '' : contentHidden
    ].join(' ');
    return <div className={disclosure}>
               <div className={wrapperClass}>
                   <div className={contentClass} aria-hidden={String(open)}>
                       {children}
                   </div>
               </div>
           </div>;
};

export default PaneClient;
