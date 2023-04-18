import { useDeferredValue } from "react";
import { useClient } from "@features/util";
import {
    disclosure, disclosureHidden, disclosureWillChange,
    wrapper, wrapperHidden, wrapperWillChange,
    content, contentHidden, contentWillChange
} from "./panel.module.css";

export const Pane = ({children, willChange, open}) => {
    const client = useClient();
    const deferredWillChange = useDeferredValue(willChange);
    const deferredOpen = useDeferredValue(open || !client);

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

    return <div className={disclosureClass} aria-hidden={deferredOpen ? null : "true"}>
               <div className={wrapperClass}>
                   <div className={contentClass}>
                       {children}
                   </div>
               </div>
           </div>;
};
