import { createContext, useContext, useId } from "react";
import { Button } from "../button";
import { Client } from "@features/util";
import { Pane } from "../pane";
import {
    details, insideHeading,
    open as openClass, close as closeClass
} from "./disclosure.module.css";


const Open = createContext(false);
Open.displayName = 'Disclosure';
const Controls = createContext(null);
Controls.displayName = 'AriaControls';

const { Provider: ControlsProvider } = Controls;
const { Provider: OpenProvider } = Open;

export const DisclosureSummary = props => {
    const { children, id } = props;
    const open = useContext(Open);
    const ariaControls = useContext(Controls);

    return <span className={insideHeading}>
               <Client>
                   <span className={details}>
                       <Button
                           aria-controls={ariaControls}
                           aria-expanded={String(open)}
                           {...props}>
                           <span className={open? openClass : closeClass}>
                               {open ? "Close" : "Open"}
                           </span>
                       </Button>
                   </span>
               </Client>
               <Client fallback={children}>
                   <label htmlFor={id}>{children}</label>
               </Client>
           </span>;
};


export const Disclosure = ({
    children,
    summary,
    open, willChange = false
}) => {
    const id = useId();
    return <>
               <ControlsProvider value={id}>
                   <OpenProvider value={open}>
                       {summary}
                   </OpenProvider>
               </ControlsProvider>
               <div id={id}>
                   <Pane open={open} willChange={willChange}>
                       {children}
                   </Pane>
               </div>
           </>;
};
