import { useDeferredValue } from "react";
import { useClient } from "@features/util";
import { usePane } from "./use-pane.js";
import {
    disclosureHiddenSteady,
    disclosure, disclosureClient, disclosureHidden, disclosureWillChange,
    wrapperHiddenSteady,
    wrapper, wrapperHidden,
    content, contentClient, contentOpen, contentHidden, contentWillChange
} from "./panel.module.css";

export const Pane = ({children, willChange, open}) => {
    const { isTransitioning, endTransition } = usePane(open);

    const client = useClient();

    const deferredOpen = useDeferredValue(open);
    const deferredWillChange = useDeferredValue(willChange);
    const steadyHidden = !isTransitioning && !deferredOpen;

    const disclosureClass = [
        disclosure,
        client ?
            [
                disclosureClient,
                steadyHidden ? disclosureHiddenSteady : '',
                deferredWillChange ? disclosureWillChange : '',
                !deferredOpen ? disclosureHidden  : '',
                deferredOpen ? disclosureOpen : ''
            ].join(' ') : ''
    ].join(' ');
    const wrapperClass = [
        wrapper,
        client ?
            [
                steadyHidden ? wrapperHiddenSteady : '',
                !deferredOpen ? wrapperHidden : ''
            ].join(' ') : ''
    ].join(' ');
    const contentClass = [
        content,
        client ?
            [
                contentClient,
                deferredWillChange ? contentWillChange : '',
                !deferredOpen ? contentHidden : '',
                deferredOpen ? contentOpen : ''
            ].join(' ') : ''
    ].join(' ');

    return <div className={disclosureClass} aria-hidden={deferredOpen ? null : "true"}>
               <div className={wrapperClass}>
                   <div className={contentClass} onTransitionEnd={endTransition}>
                       {children}
                   </div>
               </div>
           </div>;
};
