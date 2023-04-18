import { createContext, useContext, useId } from "react";
import { Pane, Button, Icon } from "@features/ui";
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
    const open = useContext(Open);
    const ariaControls = useContext(Controls);
    return <PushButton
               aria-controls={ariaControls}
               aria-expanded={String(open)}
               {...props} />;
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
