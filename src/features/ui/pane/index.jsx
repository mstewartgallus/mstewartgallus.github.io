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

    const steadyHidden = !isTransitioning && !open;

    const disclosureClass = [
        disclosure,
        client ?
            [
                disclosureClient,
                steadyHidden ? disclosureHiddenSteady : '',
                willChange ? disclosureWillChange : '',
                !open ? disclosureHidden  : ''
            ].join(' ') : ''
    ].join(' ');
    const wrapperClass = [
        wrapper,
        client ?
            [
                steadyHidden ? wrapperHiddenSteady : '',
                !open ? wrapperHidden : ''
            ].join(' ') : ''
    ].join(' ');
    const contentClass = [
        content,
        client ?
            [
                contentClient,
                willChange ? contentWillChange : '',
                !open ? contentHidden : '',
                open ? contentOpen : ''
            ].join(' ') : ''
    ].join(' ');

    return <div className={disclosureClass} aria-hidden={(client || open) ? null : "true"}>
               <div className={wrapperClass}>
                   <div className={contentClass} onTransitionEnd={endTransition}>
                       {children}
                   </div>
               </div>
           </div>;
};
