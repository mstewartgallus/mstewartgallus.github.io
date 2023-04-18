import { createContext, useContext, useId } from "react";
import { H2, Pane, Button, Icon } from "@features/ui";
import { useClient, Client } from "@features/util";
import { details, button, insideHeading } from "./disclosure.module.css";


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
                   <Client fallback={children}>
                       <span className={details}>
                           <Button
                               aria-controls={ariaControls}
                               aria-expanded={String(open)}
                               {...props}>
                               <Icon open={open}>
                                   <span className={button}>
                                       {open ? "Close" : "Open"}
                                   </span>
                               </Icon>
                           </Button>
                       </span>
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
