import { useDeferredValue } from "react";
import { Client } from "@features/util";
import {
    disclosure, disclosureHidden, disclosureWillChange,
    wrapper, wrapperHidden, wrapperWillChange,
    content, contentHidden, contentWillChange
} from "./panel.module.css";

export const Pane = ({children, willChange, open}) => {
    const deferredWillChange = useDeferredValue(willChange);
    const deferredOpen = useDeferredValue(open);

    const disclosureClass = [
        disclosure,
        deferredWillChange ? disclosureWillChange : '',
        deferredOpen ? '' : disclosureHidden
    ].join(' ');
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

    return <Client fallback={children}>
               <div className={disclosureClass}>
                   <div className={wrapperClass}>
                       <div className={contentClass}>
                           {children}
                       </div>
                   </div>
               </div>
           </Client>;
};

export default Pane;
