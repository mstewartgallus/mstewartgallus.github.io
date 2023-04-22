import { createContext, useContext, useId } from "react";
import { H2, Pane, Button } from "@features/ui";
import { useClient, Client } from "@features/util";
import {
    details, insideHeading,
    open as openClass, close as closeClass
} from "./disclosure.module.css";


const Open = createContext(false);
Open.displayName = 'Open';
const Controls = createContext(null);
Controls.displayName = 'AriaControls';

export const Summary = props => {
    const { children, id } = props;
    const open = useContext(Open);
    const ariaControls = useContext(Controls);
    const client = useClient();

    return <H2 tabIndex={client ? null : "-1"} id={client ? null : id}>
               <span className={insideHeading}>
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
               </span>
           </H2>;
};


export const Disclosure = ({
    children,
    summary,
    open, willChange = false
}) => {
    const id = useId();
    return <>
               <Controls.Provider value={id}>
                   <Open.Provider value={open}>
                       {summary}
                   </Open.Provider>
               </Controls.Provider>
               <div id={id}>
                   <Pane open={open} willChange={willChange}>
                       {children}
                   </Pane>
               </div>
           </>;
};
