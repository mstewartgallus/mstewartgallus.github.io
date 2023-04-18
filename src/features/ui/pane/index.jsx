import { useDeferredValue } from "react";
import { useClient } from "@features/util";
import {
    disclosure, disclosureServer, disclosureClient, disclosureHidden, disclosureWillChange,
    wrapper, wrapperServer, wrapperClient, wrapperHidden, wrapperWillChange,
    content, contentServer, contentClient, contentHidden, contentWillChange
} from "./panel.module.css";

export const Pane = ({children, willChange, open}) => {
    const client = useClient();
    let deferredWillChange = useDeferredValue(willChange);
    let deferredOpen = useDeferredValue(open);

    deferredWillChange &&= client;
    deferredOpen ||= !client;

    const disclosureClass = [
        disclosure,
        client ? disclosureClient : disclosureServer,
        deferredWillChange ? disclosureWillChange : '',
        deferredOpen ? '' : disclosureHidden
    ].join(' ');
    const wrapperClass = [
        wrapper,
        client ? wrapperClient : wrapperServer,
        deferredWillChange ? wrapperWillChange : '',
        deferredOpen ? '' : wrapperHidden
    ].join(' ');
    const contentClass = [
        content,
        client ? contentClient : contentServer,
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
