import { createContext, useContext, useId } from "react";
import { H2, Pane, Button, Icon } from "@features/ui";
import { useClient, Client } from "@features/util";
import { details, button, insideHeading } from "./disclosure.module.css";

const PushButton = ({ children, ...props }) => {
    const { 'aria-expanded': ariaExpanded, id } = props;

    return <span className={insideHeading}>
               <span className={details}>
                   <Button {...props}>
                       <Icon open={ariaExpanded === "true"}>
                           <span className={button}>
                               {ariaExpanded === "true" ? "Close" : "Open"}
                           </span>
                       </Icon>
                   </Button>
               </span>
               <label htmlFor={id}>{children}</label>
           </span>;
};

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
               <Client fallback={children}>
                   <PushButton
                       aria-controls={ariaControls}
                       aria-expanded={String(open)}
                       {...props} />
               </Client>
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
