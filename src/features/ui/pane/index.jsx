import { useDeferredValue, useRef, useEffect } from "react";
import { useClient } from "@features/util";
import { usePane } from "./use-pane.js";
import {
    disclosureHiddenSteady,
    disclosure, disclosureClient, disclosureOpen, disclosureHidden, disclosureWillChange,
    wrapper, wrapperClient, wrapperOpen, wrapperHidden, wrapperWillChange,
    content, contentClient, contentOpen, contentHidden, contentWillChange
} from "./panel.module.css";

export const Pane = ({children, willChange, open}) => {
    const client = useClient();

    const { isTransitioning, start, end } = usePane();

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
                wrapperClient,
                deferredWillChange ? wrapperWillChange : '',
                !deferredOpen ? wrapperHidden : '',
                deferredOpen ? wrapperOpen : ''
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

    const ref = useRef();
    useEffect(() => {
        const { current } = ref;
        const abort = new AbortController();
        const { signal } = abort;
        current.addEventListener('transitionrun', start, { signal });
        current.addEventListener('transitioncancel', end, { signal });
        return () => abort.abort();
    }, [start, end]);
    return <div className={disclosureClass} aria-hidden={deferredOpen ? null : "true"}>
               <div className={wrapperClass}>
                   <div className={contentClass}
                        ref={ref}
                        onTransitionEnd={end}
                   >
                       {children}
                   </div>
               </div>
           </div>;
};
